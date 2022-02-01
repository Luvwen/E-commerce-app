import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, provider } from '../firestore/firestoreConfig';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(12345, 'Sergio'));
    }, 3500);
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return {
    type: types.logout,
    payload: {},
  };
};
