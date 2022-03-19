import { BiErrorAlt } from "react-icons/bi";
import { SNewError } from "./style";

export function NewError() {
  return (
    <SNewError>
      <BiErrorAlt /> The sum of the dedicated percentages must equal 100.
    </SNewError>
  );
}
