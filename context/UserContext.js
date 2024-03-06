import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(name) {
    if (name === "Raghd" || name === "Peter" || name === "svitlana") {
      setUser({ name });
    } else {
      alert(
        `Error: Can't log in as "${name}". Hold up, are you trying to hack me? 🤨🔒🔍
        Unauthorized access detected! 💻🔥💥 wallah you will regret
.`
      );
    }
  }

  function logout(name) {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
