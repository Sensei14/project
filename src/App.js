import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import Main from "./dragNdrop/Main";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content.js";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
