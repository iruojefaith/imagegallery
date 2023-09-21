"use client";

import { createContext, useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext({
  user: {},
  logout: () => {},
  logged: false,
  modal: false,
  setModal: () => {},
  toggleModal: () => {},
  toggleSignIn: () => {},
  signinmodal: false,
  setSigninmodal: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  loading: false,
  setLoading: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [modal, setModal] = useState(false);
  const [signinmodal, setSigninmodal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const manageUserState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLogged(true);
        alert(`welcome${currentUser.email}`);
      }
    });
    return () => {
      manageUserState();
    };
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleSignIn = () => {
    setSigninmodal(!signinmodal);
  };

  const logout = () => {
    setUser({});
    setLogged(false);
    signOut(auth);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        logged,
        logout,
        modal,
        setModal,
        toggleModal,
        toggleSignIn,
        setSigninmodal,
        signinmodal,
        setSearchQuery,
        searchQuery,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
