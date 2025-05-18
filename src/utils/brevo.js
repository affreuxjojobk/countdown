const axios = require('axios');
const logger = require('./logger');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = 23;

async function addContactToList(email) {
  try {
    const res = await axios.post(
      `https://api.brevo.com/v3/contacts/lists/${LIST_ID}/contacts/add`,
      { emails: [email] },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY
        }
      }
    );
    logger.info(`✅ Contact ajouté à Brevo: ${email}`);
    return res.data;
  } catch (err) {
    logger.error(`❌ Erreur Brevo: ${err.response?.data || err.message}`);
    throw err;
  }
}

module.exports = { addContactToList };
