export const db = jest.fn();
export const collection = jest.fn((_db_, _collection_) => _collection_);
export const addDoc = jest.fn((Collection, data) => Promise.resolve({ [Collection]: data }));
export const doc = jest.fn((_db_, nameCol, idDoc) => Object({ [nameCol]: idDoc }));
export const serverTimestamp = jest.fn();
export const getDoc = jest.fn(() => Promise.resolve({}));
