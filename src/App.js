import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import HeadlineSection from "./Components/HeadlineSection";
import MovieSection from "./Components/MovieSection";
import Pitch from "./Components/Pitch";
import MockUpSection from "./Components/MockUpSection";
import InstagramSection from "./Components/InstagramSection";
import Footer from "./Components/Footer";
import client from "./contentful";

import logo from "./assets/logo/stf_logo_sv_150mm150dpi.png";
import styled from "styled-components";
import "./App.css";
import Presentation from "./Components/Presentation";

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [project, setProject] = useState(null);
  const [solution, setSolution] = useState(false);
  const [presentation, setPresentation] = useState(false);
  const [isPresentationActive, setIsPresentationActive] = useState(false);
  const [isSolutionActive, setIsSolutionActive] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: "project",
      })
      .then((entries) => {
        setProject(entries.items);
      });
  }, [setProject]);

  if (!project) {
    return (
      <StyledLoader>
        <p>Loading...</p>
      </StyledLoader>
    );
  }

  const content = project[0].fields;

  return (
    <div className="App">
      <Navigation
        logo={logo}
        alt="STF logotype"
        group={content.groupName}
        hashtag={content.hashtag}
      />

      <HeadlineSection
        url={content.logo.fields.file.url}
        buttonText={{
          solution: content.solutionButton,
          presentation: content.presentationButton,
        }}
        setSolution={setSolution}
        solution={solution}
        setPresentation={setPresentation}
        presentation={presentation}
        setIsPresentationActive={setIsPresentationActive}
        isPresentationActive={isPresentationActive}
        setIsSolutionActive={setIsSolutionActive}
        isSolutionActive={isSolutionActive}
      />

      {solution && (
        <>
          <MovieSection
            video={content.video.fields.file}
            cover={content.videoCover.fields.file.url}
          />

          <Pitch title={content.pitchTitle} pitch={content.pitch} />

          <InstagramSection
            videos={content.instagramVideos}
            covers={content.instagramCovers}
          />

          <MockUpSection img={content.mockUp.fields} />
        </>
      )}

      {presentation && <Presentation content={content} />}

      <Footer />
    </div>
  );
};

export default App;
