import Image from "next/image";
import { SHome } from "./style";

export function SectionFour() {
  return (
    <SHome>
      <aside>
        <span>
          <Image
            src="/assets/images/ilustration-secfour.svg"
            alt="ilustration home"
            width={100}
            height={100}
            layout="responsive"
          />
        </span>
      </aside>
      <main>
        <span>FREE SOME COST</span>
        <div>
          <h1>Save cost for you and family</h1>
          <span>
            The EXpense has been saving people&apos;s dreams helping to save and
            control your money.
          </span>
        </div>
      </main>
    </SHome>
  );
}
