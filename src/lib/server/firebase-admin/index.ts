import firebaseAdmin from "firebase-admin";
import { initializeApp, type App, type ServiceAccount } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import { SERVICE_ACCOUNT } from "$env/static/private";

if (!SERVICE_ACCOUNT) {
  throw new Error("Missing env FIREBASE_SERVICE_ACCOUNT");
}

const serviceAccount = JSON.parse(
  Buffer.from(SERVICE_ACCOUNT, "base64").toString("utf-8")
) as ServiceAccount;

let app!: App;

if (firebaseAdmin.apps.length === 0) {
  app = initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
}

export const auth = getAuth(app);
