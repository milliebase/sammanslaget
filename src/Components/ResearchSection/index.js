import React from "react";
import styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import Emoji from "../Emoji";

const StyledResearchSection = styled.section`
  background-color: var(--red-color);
  color: white;
  padding: 10%;

  .section-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
      margin: 0;
    }
  }

  .chart-wrapper {
    width: 100%;
  }

  @media (min-width: 992px) {
    padding: 10% 3%;

    h2 {
      font-size: 2em;
    }

    .chart-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chart-wrapper p {
      font-size: 1.8em;
      padding-right: 10%;
      padding-left: 4%;
    }

    .chart-holder {
      width: 60%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const ResearchSection = ({ research }) => {
  return (
    <StyledResearchSection className="section">
      <div className="section-header">
        <Emoji symbol="📈" label="chart" />
        <h2>{research}</h2>
      </div>

      <div className="chart-wrapper">
        <p>
          Vad har du saknat mest med den restriktiva våren och sommaren 2020?
        </p>

        <div className="chart-holder">
          <VictoryChart domainPadding={40}>
            <VictoryAxis
              style={{
                ticks: { size: 0 },
                tickLabels: { fontSize: 8 },
              }}
            />
            <VictoryAxis
              dependentAxis
              orientation="left"
              style={{ tickLabels: { fontSize: 10 } }}
            />
            <VictoryBar
              style={{ data: { fill: "#faebeb" } }}
              data={[
                { x: "Resa utomlands", y: 40.7 },
                { x: "Nattklubb", y: 25.9 },
                { x: "Sportevents", y: 33.3 },
                { x: "Konsert", y: 59.3 },
                { x: "Festivaler", y: 44.4 },
                { x: "Umgänge", y: 51.9 },
                { x: "Mingel", y: 25.7 },
              ]}
            />
          </VictoryChart>
        </div>
      </div>
    </StyledResearchSection>
  );
};

export default ResearchSection;
