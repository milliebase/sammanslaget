import React from "react";
import styled from "styled-components";
import "./../../App";

const StyledHeadlineSection = styled.section`
  background-color: var(--red-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadlineSection = () => {
  return (
    <StyledHeadlineSection className="section">
      <h1>#SAMMANSLAGET 2020</h1>
    </StyledHeadlineSection>
  );
};

export default HeadlineSection;
