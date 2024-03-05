import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(name) {
    if (name === "Raghd" || name === "Peter" || name === "svitlana") {
      setUser({ name });
    } else {
      alert(
        `Error: Unable to login as "${name}". Initiating hacking sequence...
         🚀\n\nHacking complete! Unauthorized access detected! Laptop self-destruct sequence initiated... 💥💻🔥\n\nJust kidding! 😄 You cannot login as "${name}".`
      );
    }
  }

  function logout() {
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
