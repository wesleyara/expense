import { BiPlanet } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

import { SHome } from "./style";

export function SectionSeven() {
  return (
    <SHome>
      <h1>Free forever</h1>

      <div>
        <BiPlanet />
        <h2>Free plan</h2>

        <ul>
          <li>Unlimited storage</li>
          <li>Support 24 hours</li>
          <li>Always updated</li>
        </ul>

        <span>$0,00/year</span>
        <br />
        <button>
          Get this <AiOutlineArrowRight />
        </button>
      </div>
    </SHome>
  );
}
