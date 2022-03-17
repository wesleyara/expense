import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
  useEffect,
} from "react";

import { UserTypes } from "../../@types";

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextTypes {
  user: UserTypes | undefined;
  setUser: Dispatch<SetStateAction<UserTypes | undefined>>;
}

export const UserContext = createContext({} as UserContextTypes);

export function UserContextProvider(props: UserContextProviderProps) {
  const [user, setUser] = useState<UserTypes>();

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");

    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
