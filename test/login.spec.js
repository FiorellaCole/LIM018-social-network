import { login } from '../src/components/login.js';
import { signInWithEmailAndPassword } from '../src/firebase.js';

jest.mock('../src/firebase.js');

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
