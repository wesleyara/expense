import ilustrationSecfour from "../../../assets/images/ilustration-secfour.svg";
import { SHome } from "./style";

export function SectionFour() {
  return (
    <SHome data-aos="fade-left" id="features">
      <figure>
        <span>
          <img src={ilustrationSecfour} alt="ilustration home" />
        </span>
      </figure>
      <article>
        <span>FREE SOME COST</span>
        <div>
          <h2>Save cost for you and family</h2>
          <span>
            The EXpense has been saving people&apos;s dreams helping to save and
            control your money.
          </span>
        </div>
      </article>
    </SHome>
  );
}
