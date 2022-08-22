import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </>
  );
}

export default App;
