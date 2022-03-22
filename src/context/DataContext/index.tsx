import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { DataTypes } from "../../@types";

interface DataContextProviderProps {
  children: ReactNode;
}

interface DataContextTypes {
  data: DataTypes[];
  setData: Dispatch<SetStateAction<DataTypes[]>>;
}

export const DataContext = createContext({} as DataContextTypes);

export function DataContextProvider(props: DataContextProviderProps) {
  const [data, setData] = useState<DataTypes[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
}
