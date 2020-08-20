import React from "react";
import styled from "styled-components";
import "./../../App";

const StyledMovieSection = styled.section`
  background-color: var(--low-gold-color);
  min-height: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
  }

  video:focus {
    outline: none;
  }

  @media (min-width: 992px) {
    min-height: 100vh;
    padding: 0;

    video {
      width: 70%;
    }
  }
`;

const MovieSection = ({ video, cover }) => {
  return (
    <StyledMovieSection className="section">
      <video controls poster={cover}>
        <source src={video.url} type="video/mp4" />
      </video>
    </StyledMovieSection>
  );
};

export default MovieSection;
