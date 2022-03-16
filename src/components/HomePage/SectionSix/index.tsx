import { GrCloudComputer } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { FaMobileAlt } from "react-icons/fa";

import { SFeatures, SHome } from "./style";

export function SectionSix() {
  return (
    <section>
      <SHome id="aboutUs">
        <h2>The Product we work with.</h2>
        <span>
          Everything we developed it was made for you. See each of our features,
          designed exclusively for your best experience using our product.
        </span>
      </SHome>
      <SFeatures>
        <div className="cardFeatures">
          <div
            style={{
              backgroundColor: "rgba(0, 255, 255, 0.2)",
            }}
          >
            <GrCloudComputer />
          </div>
          <h2>Storage</h2>
          <span>Data stored on local storage</span>
        </div>
        <div className="cardFeatures">
          <div style={{ backgroundColor: "rgba(255, 255, 0, 0.3)" }}>
            <DiJavascript1 />
          </div>
          <h2>JavaScript</h2>
          <span>Made with one of the most famous programming languages</span>
        </div>
        <div className="cardFeatures">
          <div style={{ backgroundColor: "rgba(128, 0, 128, 0.3)" }}>
            <FaMobileAlt />
          </div>
          <h2>Cross plataform</h2>
          <span>Access on any device</span>
        </div>
      </SFeatures>
    </section>
  );
}
