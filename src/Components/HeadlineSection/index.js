import React from "react";
import styled from "styled-components";
import "./../../App";

const StyledHeadlineSection = styled.section`
  background-color: var(--gold-color);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

const HeadlineSection = ({ headline, url }) => {
  return (
    <StyledHeadlineSection className="section">
      <img src={url} alt="logo" />
    </StyledHeadlineSection>
  );
};

export default HeadlineSection;
