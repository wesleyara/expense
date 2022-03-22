import ilustrationSecfive from "../../../assets/images/ilustration-secfive.svg";
import { SHome } from "./style";

export function SectionFive() {
  return (
    <SHome data-aos="fade-left">
      <article>
        <span>USE ANYTIME</span>
        <div>
          <h2>Use anytime whe you need</h2>
          <span>
            Any time, any moment. Use our services whenever and wherever you
            want.
          </span>
        </div>
      </article>
      <figure>
        <span>
          <img src={ilustrationSecfive} alt="ilustration home" />
        </span>
      </figure>
    </SHome>
  );
}
