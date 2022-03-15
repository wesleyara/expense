import Image from "next/image";
import { SHome } from "./style";

export function SectionFive() {
  return (
    <SHome>
      <main>
        <span>USE ANYTIME</span>
        <div>
          <h1>Use anytime whe you need</h1>
          <span>
            Any time, any moment. Use our services whenever and wherever you
            want.
          </span>
        </div>
      </main>
      <aside>
        <span>
          <Image
            src="/assets/images/ilustration-secfive.svg"
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
