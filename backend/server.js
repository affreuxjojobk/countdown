require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { addEmailToBrevoList } = require('./utils/brevo');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/add-email', async (req, res) => {
  const { email } = req.body;

  // Vérification plus stricte de l'email
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    await addEmailToBrevoList(email);
    res.status(200).json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('❌ Brevo error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to add email' });
  }
});

app.get('/', (req, res) => {
  res.send('🌴 BeautifulKreyol API is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
