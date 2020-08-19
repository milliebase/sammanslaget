import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 2em;

  @media (min-width: 992px) {
    font-size: 2.5em;
  }
`;

const Emoji = ({ label, symbol }) => {
  return (
    <StyledSpan
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </StyledSpan>
  );
};

export default Emoji;
