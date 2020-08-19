import React from "react";
import styled from "styled-components";
import Emoji from "../Emoji";

const StyledPitchSection = styled.section`
  background-color: var(--gold-color);
  color: white;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 2em;
      margin-bottom: 2%;
    }

    p {
      margin: 0;
      font-size: 1.5em;
      padding: 0 6%;
    }
  }
`;

const Pitch = ({ title, pitch }) => {
  return (
    <StyledPitchSection>
      <Emoji symbol="🏆" label="trophy" />
      <h2>{title}</h2>
      <p>{pitch}</p>
    </StyledPitchSection>
  );
};

export default Pitch;
