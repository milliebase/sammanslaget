import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import HeadlineSection from "./Components/HeadlineSection";
import MovieSection from "./Components/MovieSection";
import Footer from "./Components/Footer";
import Pitch from "./Components/Pitch";
import MockUpSection from "./Components/MockUpSection";
import client from "./contentful";

import logo from "./assets/logo/stf_logo_sv_150mm150dpi.png";
import "./App.css";
import styled from "styled-components";
import InstagramSection from "./Components/InstagramSection";

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [project, setProject] = useState(null);

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
  console.log(content);

  return (
    <div className="App">
      <Navigation
        logo={logo}
        alt="STF logotype"
        group={content.groupName}
        hashtag={content.hashtag}
      />

      <HeadlineSection
        headline={content.projectTitle}
        url={content.logo.fields.file.url}
      />

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
      <Footer />
    </div>
  );
};

export default App;
