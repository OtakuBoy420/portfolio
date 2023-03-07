import { motion } from "framer-motion";
import styles from "../../constants/styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../constants/content";
import ServiceCard from "../subcomponents/ServiceCard";
import CreateSection from "../hoc/CreateSection";

export function About() {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>About me.</h3>
      </motion.div>

      <motion.p className="mt-4 max-w-3xl text-xl leading-loose text-dimWhite" variants={fadeIn("right", "spring", 0.3, 1)}>
        I'm a passionate web developer with experience in JavaScript and React who's quick at picking up new tools and always eager to learn new things. I have a passion for creating
        efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10 lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  );
}

export default CreateSection(About, "about", true);
