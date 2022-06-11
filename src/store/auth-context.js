import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("logged-in");
  };

  const onLoginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("logged-in", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("logged-in") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogin: onLoginHandler, onLogout: onLogoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
