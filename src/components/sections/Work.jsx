import React from "react";

import { motion } from "framer-motion";

import CreateSection from "../../components/hoc/CreateSection";
import { projects } from "../../constants/content";
import { fadeIn, textVariant } from "../../utils/motion";
import styles from "../../constants/styles";
import ProjectCard from "../subcomponents/ProjectCard";
export function Work() {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My work</p>
        <h3 className={styles.sectionHeadText}>Projects.</h3>
      </motion.div>
      <div className="flex w-full">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-dimWhite mt-3 max-w-3xl text-lg leading-[30px]">
          These projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It
          reflects my ability to work with a variety of technologies and frameworks, ability to solve complex problems and that i can manage projects effectively, especially when working in
          a team.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7 lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
}
export default CreateSection(Work, "work");
