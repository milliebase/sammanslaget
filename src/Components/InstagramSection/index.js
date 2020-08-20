import React from "react";
import styled from "styled-components";

const StyledInstagramSection = styled.section`
  background-color: var(--low-gold-color);

  .video-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  video {
    width: 90%;
    padding: 5% 0;
  }

  video:focus {
    outline: none;
  }

  @media (min-width: 992px) {
    .video-wrapper {
      flex-direction: row;
      justify-content: space-around;
    }

    video {
      width: 30%;
      padding: 0;
    }
  }
`;

const InstagramSection = ({ videos }) => {
  return (
    <StyledInstagramSection className="section">
      <div className="video-wrapper">
        {videos.map((video) => {
          return (
            <video controls>
              <source src={video.fields.file.url} type="video/mp4" />
            </video>
          );
        })}
      </div>
    </StyledInstagramSection>
  );
};

export default InstagramSection;
