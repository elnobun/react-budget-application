import { firebase, googleAuthProvider } from "../../firebase/firebase";

// LOGIN ACTION
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// LOGOUT ACTION
export const logout = () => ({
  type: "LOGOUT",
});
export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  };
};
