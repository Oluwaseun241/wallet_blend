import { useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState("");

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken("");
  };

  return { token, login, logout };
};
