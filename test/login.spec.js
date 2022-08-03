import { login } from '../src/components/login.js';
import { signInWithEmailAndPassword } from '../firebase.js';
jest.mock('../firebase.js' , () => {

    return {
      __esModule: true,
      ...originalModule,
      signInWithEmailAndPassword: jest.fn((auth, correo, contraseña) => 'mocked baz'),
      
    };
});

describe('login', () => {

//  signInWithEmailAndPassword(auth, correo, contraseña)
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});
