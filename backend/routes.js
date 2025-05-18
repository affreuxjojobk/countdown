const express = require('express');
const { handleSignup } = require('./controllers/emailController');

const router = express.Router();

// Limiter spécifique
const rateLimit = require('express-rate-limit');
const signupLimiter = rateLimit({
  windowMs: 15*60*1000,
  max: 5,
  message: { error: 'Trop de tentatives. Réessayez plus tard.' },
});

router.get('/health', (req, res) => res.send({ status: 'ok' }));
router.get('/version', (req, res) => res.send({ version: process.env.npm_package_version }));

router.post('/api/add-email', signupLimiter, handleSignup);

module.exports = router;
