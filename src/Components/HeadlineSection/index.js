import React from "react";
import styled from "styled-components";
import "./../../App";

const StyledHeadlineSection = styled.section`
  background-color: var(--green-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadlineSection = ({ headline }) => {
  return (
    <StyledHeadlineSection className="section">
      <h1>{headline}</h1>
    </StyledHeadlineSection>
  );
};

export default HeadlineSection;
