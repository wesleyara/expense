import { MouseEventHandler, useState } from "react";
import { SNavBar } from "./style";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";

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
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <SNavBar>
      <div>
        <span>EX</span> pense
      </div>

      <nav className={active ? "active" : ""}>
        <button className="btnMenu" onClick={handleActive}>
          {!active ? <GiHamburgerMenu /> : <CgMenuMotion />}
        </button>
        <ul>
          <Link to={props.linkOne}>
            <li onClick={handleActive}>{props.listOne}</li>
          </Link>
          <Link to={props.linkTwo}>
            <li onClick={handleActive}>{props.listTwo}</li>
          </Link>
          <Link to={props.linkThree}>
            <li onClick={handleActive}>{props.listThree}</li>
          </Link>
        </ul>
      </nav>

      <button className="btnNavigate" onClick={props.eventClick}>
        {props.buttonDescriber}
      </button>
    </SNavBar>
  );
}
