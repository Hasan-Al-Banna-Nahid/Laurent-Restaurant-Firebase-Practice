/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const emailPasswordSignUpHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutHandler = () => {
    return signOut(auth);
  };
  const googleLoginHandler = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLoginHandler = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const authInfo = {
    emailPasswordSignUpHandler,
    loginHandler,
    logOutHandler,
    googleLoginHandler,
    githubLoginHandler,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
