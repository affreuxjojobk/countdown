const axios = require('axios');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = 23; // à adapter si nécessaire

const addEmailToBrevoList = async (email) => {
  try {
    const response = await axios.post(
      `https://api.brevo.com/v3/contacts/lists/${LIST_ID}/contacts/add`,
      { emails: [email] },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
      }
    );
    console.log('✅ Contact ajouté à Brevo:', email);
    return response.data;
  } catch (error) {
    console.error('❌ Erreur Brevo:', error.response?.data || error.message);
    throw error;
  }
};

module.exports = { addEmailToBrevoList };
