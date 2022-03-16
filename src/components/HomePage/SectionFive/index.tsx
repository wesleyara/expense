import Image from "next/image";
import { SHome } from "./style";

export function SectionFive() {
  return (
    <SHome>
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
          <Image
            src="/assets/images/ilustration-secfive.svg"
            alt="ilustration home"
            width={100}
            height={100}
            layout="responsive"
          />
        </span>
      </figure>
    </SHome>
  );
}
