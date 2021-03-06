// import { useUser } from "../../hooks/useUser";
import { SectionFive } from "./FeaturesSectionThree";
import { SectionFour } from "./FeaturesSectionTwo";
import { SectionOne } from "./HomeSection";
import { SectionTwo } from "./OverviewSection";
import { SectionSeven } from "./PricingSection";
import { SectionSix } from "./AboutUsSection";
import { SectionThree } from "./FeaturesSectionOne";

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
