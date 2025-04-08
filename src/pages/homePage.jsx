import { useState } from "react";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Visit from "../components/visit.jsx";
import Services from "../components/services.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Visit />
      <Services />
    </>
  );
}

export default HomePage;
