import { AiOutlineArrowRight } from "react-icons/ai";
import { SHome } from "./style";

import ilustrationSecthree from "../../../assets/images/ilustration-secthree.svg";

export function SectionThree() {
  return (
    <SHome id="features">
      <article>
        <span>ALWALYS ONLINE</span>
        <div>
          <h2>Real-time support with cloud</h2>
          <span>
            Support available 24 hours a day. Every day of the week, to deliver
            the best experience possible.
          </span>
        </div>
        <span className="linkSpan">
          Learn more <AiOutlineArrowRight />
        </span>
      </article>
      <figure>
        <span>
          <img src={ilustrationSecthree} alt="ilustration home" />
        </span>
      </figure>
    </SHome>
  );
}
