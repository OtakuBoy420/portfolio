import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { slideInL } from "../../utils/motion";
function TiltImage({ imageUrl }) {
  return (
    <Tilt perspective={1000} glarePosition="all" scale={1.02} tiltReverse trackOnWindow={true} className="z-[2] w-full rounded-full">
      <motion.img variants={slideInL("left", "spring", 0.7, 1.75)} src={imageUrl} className="aspect-square h-fit w-full" />
    </Tilt>
  );
}

export default TiltImage;
