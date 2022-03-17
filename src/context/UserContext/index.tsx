import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
