import React from "react";
import styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie } from "victory";
import Emoji from "../Emoji";

const StyledResearchSection = styled.section`
  background-color: var(--gold-color);
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
              style={{ data: { fill: "#faf0d7" } }}
              data={[
                { x: "Facebook", y: 59.3 },
                { x: "Instagram", y: 92.6 },
                { x: "Twitter", y: 14.8 },
                { x: "Snapchat", y: 48.1 },
                { x: "Nyhetsmedier", y: 22.2 },
                { x: "Bloggar", y: 3.7 },
                { x: "Youtube", y: 3.7 },
                { x: "Reddit", y: 3.7 },
              ]}
            />
          </VictoryChart>
        </div>
      </div>
    </StyledResearchSection>
  );
};

export default ResearchSection;
