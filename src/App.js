import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Head from "../src/components/HEAD/Head";
import Foot from "../src/components/FOOT/Foot";
import Session1 from "../src/components/BODY/Session1";
import Session2 from "../src/components/BODY/Session2";
import Session3 from "../src/components/BODY/Session3";
import Session4 from "../src/components/BODY/Session4";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Session1 /> <Session2 /> <Session3 /> <Session4 />
              </div>
            }
          />
        </Routes>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
