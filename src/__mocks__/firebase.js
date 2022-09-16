export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signOut = jest.fn(() => Promise.resolve({}));
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));
export const auth = jest.fn();
export const signInWithPopup = jest.fn((_auth_, provider) => Promise.resolve({ provider }));
