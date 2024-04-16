const admin = require('../config/firebaseAdmin');

const verifyToken = (req, res, next) => {
    const idToken = req.query.idToken;
    if (!idToken) {
        return res.status(401).send('No ID token provided');
    }
    admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken;
            next(); 
        })
        .catch(error => {
            console.error('Error verifying ID token:', error);
            res.status(401).send("Unauthorized");
        });
};

module.exports = verifyToken;