import { fadeIn } from "../../utils/motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div className="green-pink-gradient shadow-card w-full rounded-[20px] p-[2px]" variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        <div options={{ max: 45, scale: 1, speed: 450 }} className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary py-5 px-12">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-xl font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
