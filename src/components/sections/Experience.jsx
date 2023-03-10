import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import styles from "../../constants/styles";
import { experiences } from "../../constants/content";
import CreateSection from "../hoc/CreateSection";
import { textVariant } from "../../utils/motion";
import Timeline from "../subcomponents/Timeline";
import TypingText from "../subcomponents/TypingText";
function Experience() {
  return (
    <>
      <motion.div variants={textVariant}>
        <TypingText title="My journey so far" />
        <h3 className={styles.sectionHeadText}>Experience.</h3>
      </motion.div>
      <article className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <Timeline key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </article>
    </>
  );
}

export default CreateSection(Experience, "experience");
