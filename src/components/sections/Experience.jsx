import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import styles from "../../constants/styles";
import { experiences } from "../../constants/content";
import CreateSection from "../hoc/CreateSection";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "../subcomponents/ExperienceCard";
function Experience() {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h3 className={styles.sectionHeadText}>Experience.</h3>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default CreateSection(Experience, "experience");
