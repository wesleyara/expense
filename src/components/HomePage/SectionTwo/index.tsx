import { SHome } from "./style";

import overview from "../../../assets/images/expense.jpg";

export function SectionTwo() {
  return (
    <SHome data-aos="fade-left" id="features">
      <img src={overview} alt="overview" />
    </SHome>
  );
}
