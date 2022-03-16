import Image from "next/image";
import { SHome } from "./style";

export function SectionFour() {
  return (
    <SHome>
      <figure>
        <span>
          <Image
            src="/assets/images/ilustration-secfour.svg"
            alt="ilustration home"
            width={100}
            height={100}
            layout="responsive"
          />
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
