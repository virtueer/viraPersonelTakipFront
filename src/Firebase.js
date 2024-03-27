import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXOWfyaRbPlmlx50exp09wSV-YdMhY2iI",
  authDomain: "virapersoneltakip.firebaseapp.com",
  projectId: "virapersoneltakip",
  storageBucket: "virapersoneltakip.appspot.com",
  messagingSenderId: "1090064523885",
  appId: "1:1090064523885:web:c0ade43251b2a482cd9564",
};

const Firebase = initializeApp(firebaseConfig);
const storage = getStorage(Firebase);

export { storage, Firebase as default };
