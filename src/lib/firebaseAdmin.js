import admin from "firebase-admin";

// Verifique se já inicializou antes
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            type: process.env.FIREBASE_TYPE,
            project_id: process.env.FIREBASE_PROJECT_ID,
            private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            client_id: process.env.FIREBASE_CLIENT_ID,
            auth_uri: process.env.FIREBASE_AUTH_URI,
            token_uri: process.env.FIREBASE_TOKEN_URI,
            auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
        }),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
}

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

const firestore = {
  getCollection: async (name) => {
    const snapshot = await db.collection(name).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  getDocument: async (collection, id) => {
    const docRef = db.collection(collection).doc(id);
    const docSnap = await docRef.get();
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  },
  
  createDocument: async (collection, data) => {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  },
  
  updateDocument: async (collection, id, data) => {
    await db.collection(collection).doc(id).set(data, { merge: true });
  },
  
  deleteDocument: async (collection, id) => {
    await db.collection(collection).doc(id).delete();
  }
};

export { db, admin, FieldValue, firestore };