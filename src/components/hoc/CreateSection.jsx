import { AnimatePresence, motion } from "framer-motion";
import styles from "../../constants/styles";
import { staggerContainer } from "../../utils/motion";

const CreateSection = (Component, idName) =>
  function HOC() {
    return (
      <AnimatePresence>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}>
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      </AnimatePresence>
    );
  };

export default CreateSection;
