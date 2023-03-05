import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Twirl as Hamburger } from "hamburger-react";
import styles from "../../constants/styles";
import { navLinks } from "../../constants/content";
import { logo } from "../../assets";
import NavigationMenu from "./NavigationMenu";
import { navVariants } from "../../utils/motion";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowMiddle = scrollTop + windowHeight / 2;

      // Calculate the distance between the middle of the screen and each section
      const sectionDistances = navLinks.map((nav) => {
        const section = document.getElementById(nav.id);
        const sectionTop = section.getBoundingClientRect().top + scrollTop;
        const sectionHeight = section.getBoundingClientRect().height;
        const sectionMiddle = sectionTop + sectionHeight / 2;
        return Math.abs(windowMiddle - sectionMiddle);
      });

      // Find the index of the section that is closest to the middle of the screen
      const closestIndex = sectionDistances.indexOf(Math.min(...sectionDistances));

      setCurrentSection(navLinks[closestIndex].title);

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setCurrentSection("");
      }
    };

    const debouncedHandleScroll = _.debounce(handleScroll, 16);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);
  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navVariants(scrolled)}
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${scrolled ? "bg-secondary/75 backdrop-blur-sm" : "bg-transparent"} transition-colors duration-500`}>
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            Oliver &nbsp;
            <span className="hidden sm:block"> Zeymer</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((item) => (
            <li key={item.id} className={` cursor-pointer text-[18px] font-medium hover:text-white`}>
              <a href={`#${item.id}`} className={`transition-colors duration-500 hover:text-primary/70 ${currentSection === item.title ? "text-primary" : "text-dimWhite"}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} duration="0.5" />

          <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} currentSection={currentSection} />
        </div>
      </div>
    </motion.nav>
  );
}
