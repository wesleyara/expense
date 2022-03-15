import Link from "next/link";
import { MouseEventHandler } from "react";
import { SNavBar } from "./style";

interface NavBarProps {
  listOne: string;
  listTwo: string;
  listThree?: string;
  eventClick: MouseEventHandler<HTMLButtonElement>;
  buttonDescriber: string;
  linkOne: string;
  linkTwo: string;
  linkThree: string;
}

export function NavBar(props: NavBarProps) {
  return (
    <SNavBar>
      <div>
        <span>EX</span> pense
      </div>

      <ul>
        <Link href={props.linkOne}>
          <li>{props.listOne}</li>
        </Link>
        <Link href={props.linkTwo}>
          <li>{props.listTwo}</li>
        </Link>
        <Link href={props.linkThree}>
          <li>{props.listThree}</li>
        </Link>
      </ul>

      <button onClick={props.eventClick}>{props.buttonDescriber}</button>
    </SNavBar>
  );
}
