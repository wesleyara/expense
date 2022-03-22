// import { useUser } from "../../hooks/useUser";
import { SectionFive } from "./SectionFive";
import { SectionFour } from "./SectionFour";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionSeven } from "./SectionSeven";
import { SectionSix } from "./SectionSix";
import { SectionThree } from "./SectionThree";

export function HomePage() {
  // const { user } = useUser();

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}
