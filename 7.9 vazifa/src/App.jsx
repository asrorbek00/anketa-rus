import React from "react";
import Personal from "./components/Personal";

import Education from "./components/Education";
import Knowled from "./components/Knowled";

function App() {
  return (
    <div className="container">
      <h3 className="title">АНКЕТА КАНДИДАТА</h3>
      <form>
        <Personal />
        <Education />
        <Knowled />
        <div style={{ textAlign: "right", marginTop: "20px", }}>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
} 

export default App;
