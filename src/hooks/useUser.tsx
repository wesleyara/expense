import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  return { user, setUser };
}
