import { MouseEventHandler } from "react";
import { SNavBar } from "./style";

interface NavBarProps {
  listOne: string;
  listTwo: string;
  listThree?: string;
  eventClick: MouseEventHandler<HTMLButtonElement>;
  buttonDescriber: string;
}

export function NavBar(props: NavBarProps) {
  return (
    <SNavBar>
      <div>
        <span>EX</span> pense
      </div>

      <ul>
        <li>{props.listOne}</li>
        <li>{props.listTwo}</li>
        <li>{props.listThree}</li>
      </ul>

      <button onClick={props.eventClick}>{props.buttonDescriber}</button>
    </SNavBar>
  );
}
