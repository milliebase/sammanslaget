import React from "react";
import styled from "styled-components";

const StyledPresentation = styled.section`
  background-color: var(--gold-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: -1px;

  .presentation-bg {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .main-video {
    position: absolute;
    z-index: 99;
    margin-top: 20%;
    width: 30%;
  }

  .instagram {
    display: flex;
    justify-content: space-around;
    width: 50%;
    position: absolute;
    z-index: 99;
  }

  .ad {
    width: 42%;
    position: absolute;
    z-index: 98;
    margin-top: 30%;
  }
`;

const Presentation = ({ content }) => {
  return content.presentationBg.map((item, i) => {
    return (
      <StyledPresentation key={i} className="section">
        <img className="presentation-bg" src={item.fields.file.url} alt="STF" />

        {i === 3 && (
          <video
            className="main-video"
            controls
            poster={content.videoCover.fields.file.url}
          >
            <source src={content.video.fields.file.url} type="video/mp4" />
          </video>
        )}

        {i === 4 && (
          <>
            <div className="instagram">
              {content.instagramVideos.map((video, i) => {
                return (
                  <video
                    controls
                    poster={content.instagramCovers[i].fields.file.url}
                    key={i}
                    style={{ width: "20%" }}
                  >
                    <source src={video.fields.file.url} type="video/mp4" />
                  </video>
                );
              })}
            </div>

            <img
              className="ad"
              src={content.mockUp.fields.file.url}
              alt="Annons"
            />
          </>
        )}
      </StyledPresentation>
    );
  });
};

export default Presentation;
