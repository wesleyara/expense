import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export function useData() {
  const context = useContext(DataContext);
  const { data, setData } = context;

  return { data, setData };
}
