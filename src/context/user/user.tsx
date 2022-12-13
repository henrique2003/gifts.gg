import { createContext, useState } from "react";

import { User, UserContextData } from "./types";

export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | {}>({});

  function changeUserData(user: User): void {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, changeUserData }}>
      {children}
    </UserContext.Provider>
  );
};
