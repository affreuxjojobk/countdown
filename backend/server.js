require('dotenv').config();
const express           = require('express');
const helmet            = require('helmet');
const cors              = require('cors');
const rateLimit         = require('express-rate-limit');
const { json }          = require('body-parser');
const validator         = require('validator');
const logger            = require('./utils/logger');
const { addContactToList } = require('./utils/brevo');

const app = express();
const PORT = process.env.PORT || 10000;

// --- Sécurité & parsing ---
app.use(helmet());
app.use(cors({
  origin: [
    'https://beautifulkreyol-api.onrender.com',
    'https://beautifulkreyol.com',
    'https://www.beautifulkreyol.com',
    'https://countdown-beta-one.vercel.app'
  ]
}));
app.use(json({ limit: '100kb' }));
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

// --- Routes applicatives ---
app.get('/', (req, res) => res.send('🌴 API OK'));

// Endpoint d’ajout d’email
app.post('/api/add-email', async (req, res) => {
  const { email } = req.body;
  if (!validator.isEmail(email || '')) {
    return res.status(400).json({ error: 'Adresse email invalide' });
  }
  try {
    await addContactToList(validator.normalizeEmail(email));
    return res.json({ message: 'Email ajouté' });
  } catch (err) {
    logger.error('Brevo error', err);
    return res.status(500).json({ error: 'Échec ajout email' });
  }
});

// --- Gestion des erreurs non gérées ---
app.use((err, req, res, next) => {
  logger.error('Unhandled error', err);
  res.status(500).json({
    message: 'Erreur interne',
    ...(process.env.NODE_ENV !== 'production' && { detail: err.message }),
  });
});

// --- Lancement ---
app.listen(PORT, () => {
  logger.info(`Serveur en ${process.env.NODE_ENV} sur port ${PORT}`);
});
