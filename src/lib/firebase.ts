// QIRAZ — Firebase Architecture Preparation
// In V1, we fall back to LocalStorage if Firebase environment variables are not configured.

export const firebaseConfig = {
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY || "",
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID || ""
};

// Detect configuration status
export const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId
);

export const dbPlaceholder = {
  syncProgress: async (progressData: any) => {
    if (isFirebaseConfigured) {
      console.log("[Firebase Cloud Sync] Syncing progress to Firestore...", progressData);
      // Future integration:
      // await setDoc(doc(db, "users", userId), progressData);
      return true;
    } else {
      console.log("[Firebase Cloud Placeholder] LocalStorage active. Cloud sync skipped.");
      return false;
    }
  }
};
