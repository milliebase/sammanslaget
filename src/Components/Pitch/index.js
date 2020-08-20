import React from "react";
import styled from "styled-components";
import Emoji from "../Emoji";
import ReactMarkdown from "react-markdown";

const StyledPitchSection = styled.section`
  background-color: var(--red-color);
  color: white;
  padding: 10%;

  .section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 2em;
      margin-bottom: 2%;
    }

    p {
      font-size: 1.5em;
    }
  }
`;

const Pitch = ({ title, pitch }) => {
  return (
    <StyledPitchSection>
      <div className="section-header">
        <Emoji symbol="🏆" label="trophy" />
        <h2>{title}</h2>
      </div>
      <ReactMarkdown source={pitch} />
    </StyledPitchSection>
  );
};

export default Pitch;
