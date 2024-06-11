import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import About from "./components/About";
import Artwork from "./components/Artwork";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Stack />
      <About />
      <Projects />
      <Artwork />
      <Contact />
    </div>
  );
}

export default App;
