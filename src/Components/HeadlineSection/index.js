import React from "react";
import styled from "styled-components";
import "./../../App";
import Button from "../Button";

const StyledHeadlineSection = styled.section`
  background-color: var(--gold-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;

  img {
    width: 100%;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
  }

  @media (min-width: 992px) {
    padding: 0 25%;
  }
`;

const HeadlineSection = ({
  url,
  buttonText,
  setSolution,
  solution,
  setPresentation,
  presentation,
  setIsSolutionActive,
  isSolutionActive,
  setIsPresentationActive,
  isPresentationActive,
}) => {
  return (
    <StyledHeadlineSection className="section">
      <img src={url} alt="logo" />

      <div className="buttons">
        <Button
          text={buttonText.solution}
          onClick={() => {
            if (!solution) {
              setSolution(!solution);
              setIsSolutionActive(!isSolutionActive);
            }

            if (!solution && isPresentationActive) {
              setPresentation(!presentation);
              setIsPresentationActive(!isPresentationActive);
            }
          }}
          isActiveBg={isSolutionActive}
          showMobile={true}
        />
        <Button
          text={buttonText.presentation}
          onClick={() => {
            if (!presentation) {
              setPresentation(!presentation);
              setIsPresentationActive(!isPresentationActive);
            }

            if (!presentation && isSolutionActive) {
              setSolution(!solution);
              setIsSolutionActive(!isSolutionActive);
            }
          }}
          isActiveBg={isPresentationActive}
          showMobile={false}
        />
      </div>
    </StyledHeadlineSection>
  );
};

export default HeadlineSection;
