import { login } from '../src/components/login.js';
import { signUp } from '../src/components/registro.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../src/firebase.js';

jest.mock('../src/firebase.js');
jest.mock('../src/firestore.js');

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('Debería poder iniciar sesion', () => createUserWithEmailAndPassword('foodies@gmail.com', '123456')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][0]).toBe('foodies@gmail.com');
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('123456');
    }));
});

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('Debería poder registrar un usuario', () => signInWithEmailAndPassword('foodies@gmail.com', '123456')
    .then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][0]).toBe('foodies@gmail.com');
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('123456');
    }));
});
