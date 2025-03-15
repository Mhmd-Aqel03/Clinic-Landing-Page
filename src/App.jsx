import { useState } from "react";
import NavBar from "./components/navBar";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Visit from "./components/visit.jsx";
import Services from "./components/services.jsx"
import Footer from "./components/footer.jsx"
function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Visit />
      <Services />
      <Footer />
    </>
  );
}

export default App;
