/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
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
  const authInfo = {
    emailPasswordSignUpHandler,
    loginHandler,
    logOutHandler,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
