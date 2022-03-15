import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SHome } from "./style";

export function SectionThree() {
  return (
    <SHome id="features">
      <main>
        <span>ALWALYS ONLINE</span>
        <div>
          <h1>Real-time support with cloud</h1>
          <span>
            Support available 24 hours a day. Every day of the week, to deliver
            the best experience possible.
          </span>
        </div>
        <span className="linkSpan">
          Learn more <AiOutlineArrowRight />
        </span>
      </main>
      <aside>
        <span>
          <Image
            src="/assets/images/ilustration-secthree.svg"
            alt="ilustration home"
            width={100}
            height={100}
            layout="responsive"
          />
        </span>
      </aside>
    </SHome>
  );
}
