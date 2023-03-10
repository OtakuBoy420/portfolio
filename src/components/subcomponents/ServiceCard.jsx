import { fadeIn } from "../../utils/motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ServiceCard({ index, title, icon }) {
  return (
    <Tilt scale={1.1} className="w-full xs:w-[250px]">
      <motion.div className="green-pink-gradient w-full rounded-3xl p-[2px] shadow-card" variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        <article className="flex min-h-[280px] flex-col items-center justify-evenly rounded-3xl bg-secondary py-5 px-12">
          <img src={icon} alt={title} className="h-16 w-16 rounded-full object-contain" />
          <h3 className="text-center text-xl font-bold">{title}</h3>
        </article>
      </motion.div>
    </Tilt>
  );
}
