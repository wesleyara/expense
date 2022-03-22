import { BiPlanet } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

import { SHome } from "./style";

export function SectionSeven() {
  return (
    <SHome data-aos="fade-left">
      <h2 id="pricing">Free forever</h2>

      <div>
        <BiPlanet />
        <h3>Free plan</h3>

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
