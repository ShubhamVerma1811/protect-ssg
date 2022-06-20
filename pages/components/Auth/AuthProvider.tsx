import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [init, setInit] = useState(false);

  const value = {
    user,
    init,
  };

  useEffect(() => {
    const user = localStorage.getItem("user") || "{}";
    setUser(JSON.parse(user));
    setInit(false);
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
