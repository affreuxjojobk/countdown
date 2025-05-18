require('dotenv').config();
const axios = require('axios');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = 23; // Remplace ce numéro par le vrai ID de liste

// 1. Crée ou met à jour le contact dans Brevo
const createOrUpdateContact = async (email) => {
  try {
    await axios.post(
      'https://api.brevo.com/v3/contacts',
      { email: email },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
      }
    );
    console.log(`✅ Contact créé ou mis à jour : ${email}`);
  } catch (error) {
    // Ignore l'erreur si le contact existe déjà
    if (error.response?.status === 400 && error.response?.data?.code === 'duplicate_parameter') {
      console.log(`ℹ️ Contact déjà existant : ${email}`);
    } else {
      console.error('❌ Erreur lors de la création du contact:', error.response?.data || error.message);
      throw error;
    }
  }
};

// 2. Ajoute le contact à la liste
const addContactToList = async (email) => {
  await createOrUpdateContact(email);

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
    console.log('✅ Contact ajouté à la liste Brevo:', email);
    return response.data;
  } catch (error) {
    if (
      error.response?.status === 400 &&
      error.response?.data?.message?.includes('Contact already in list')
    ) {
      console.log(`ℹ️ Contact déjà dans la liste : ${email}`);
      return;
    }

    console.error('❌ Erreur lors de l’ajout à la liste :', error.response?.data || error.message);
    throw error;
  }
};

module.exports = { addContactToList };

