import React, { useEffect, useState } from "react";
import logo from "./assets/logo/stf_logo_sv_150mm150dpi.png";
import "./App.css";
import Navigation from "./Components/Navigation";
import HeadlineSection from "./Components/HeadlineSection";
import MovieSection from "./Components/MovieSection";
import ResearchSection from "./Components/ResearchSection";

const App = () => {
  return (
    <div className="App">
      <Navigation logo={logo} alt="STF logotype" />
      <HeadlineSection />
      <MovieSection />
      <ResearchSection />
    </div>
  );
};

export default App;
