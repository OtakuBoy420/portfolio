import { motion } from "framer-motion";
import { textContainer, textVariant } from "../../utils/motion";

const TypingText = ({ title, textStyles }) => (
  <motion.p viewport={{ once: true }} variants={textContainer} className={`text-sm font-normal text-dimWhite ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} viewport={{ once: true }} variants={textVariant} className="inline-block">
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default TypingText;
