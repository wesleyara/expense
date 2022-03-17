import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface DataContextProviderProps {
  children: ReactNode;
}

interface DataTypes {
  item: string;
  value: number;
  type: string;
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
