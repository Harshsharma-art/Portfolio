import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Education/>
      <Projects/>
      <Certificates/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;



