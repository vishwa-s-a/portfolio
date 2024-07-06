import React from "react";
import "./App.css";
import Navbar from "./Components/Home/Navbar.jsx";
import Body1 from "./Components/Home/Body1.jsx";
import Body2 from "./Components/Home/Body2.jsx";
import Project from "./Components/Home/Project.jsx";
import Body4 from "./Components/Home/Body4.jsx";
import TechnicalSkills from "./Components/Home/TechnicalSkills.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Body1 />
        <Body2 />
        <Project />
        <Body4 />
      </div>
    </>
  );
}

export default App;
