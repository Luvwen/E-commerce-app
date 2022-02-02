import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  app,
  googleProvider,
  twitterProvider,
  facebookProvider,
} from '../firestore/firestoreConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err));
    dispatch(finishLoading());
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    const auth = getAuth(app);
    signInWithPopup(auth, googleProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const loginWithTwitter = () => {
  return (dispatch) => {
    const auth = getAuth(app);
    signInWithPopup(auth, twitterProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const loginWithFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebookProvider).then(({ user }) => {
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

export const startLogout = () => {
  return (dispatch) => {
    const auth = getAuth(app);
    signOut(auth);
    dispatch(logout());
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
