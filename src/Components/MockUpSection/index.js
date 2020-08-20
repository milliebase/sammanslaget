import React from "react";
import styled from "styled-components";

const StyledMockUpSection = styled.section`
  padding: 0;
  min-height: unset;
  height: 95vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const MockUpSection = ({ img }) => {
  return (
    <StyledMockUpSection className="section">
      <img src={img.file.url} alt={img.title} />
    </StyledMockUpSection>
  );
};

export default MockUpSection;
