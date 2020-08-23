import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--gold-color);
  border: 1px white solid;
  color: white;
  padding: 3%;
  text-transform: uppercase;
  width: 100%;
  margin: 2%;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

const Button = ({ text, onClick, isActiveBg, showMobile }) => {
  console.log(showMobile);
  return (
    <StyledButton
      className={
        (isActiveBg ? "button-bg" : "") +
        " " +
        (showMobile ? "" : "hide-mobile")
      }
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
