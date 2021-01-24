const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

async function decodeIDToken(req, res, next) {
    const header = req.headers.authorization;

    if (header !== 'Bearer null' ) {
        if (req.headers.authorization.startsWith('Bearer ')) {
            const idToken = req.headers.authorization.split('Bearer ')[1];

            try {
                const decodedToken = await admin.auth().verifyIdToken(idToken);
                req['currentUser'] = decodedToken;
            } catch (err) {
                console.log(err);
            }
        }
    }
    next();
}

module.exports = decodeIDToken;