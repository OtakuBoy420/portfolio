import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Tech from "../components/sections/Tech";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
import WaveDivider from "../components/subcomponents/WaveDivider";
import { StarsCanvas } from "../components/canvas";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative z-[2] pb-24">
        <WaveDivider />
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
      <div className="relative z-0">
        <StarsCanvas />
        <Contact />
      </div>
    </>
  );
}
