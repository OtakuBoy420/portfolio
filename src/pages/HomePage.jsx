import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Tech from "../components/sections/Tech";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Work />
      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
}
