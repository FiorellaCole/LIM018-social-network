import {
  getStorage, ref, uploadBytes, getDownloadURL,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js';
import { app } from './firebase.js';

const storage = getStorage(app);
// const storageRef = ref(storage);

export const subirFileStorage = async (file, carpeta) => {
  const archivoRef = ref(storage, `${carpeta}/${file.name}`);
  await uploadBytes(archivoRef, file);
  const fileUrl = getDownloadURL(archivoRef);
  return fileUrl;
};
