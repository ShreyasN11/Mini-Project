const Admin = require('firebase-admin');
const credentials = require('../serviceAccountKey.json');

const admin = Admin.initializeApp({
    credential:Admin.credential.cert(credentials)
});

module.exports = admin;