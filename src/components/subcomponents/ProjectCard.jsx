import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { github } from "../../assets";
import Tilt from "react-parallax-tilt";

export default function ProjectCard(props) {
  const { name, description, tags, color, index, image, link, source_code_link } = props;
  return (
    <motion.div onClick={() => window.open(link, "_blank")} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full cursor-pointer rounded-2xl bg-secondary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
          <div className="absolute inset-0 m-3 flex justify-end">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110">
                <img src={github} alt={name + "live site"} className="h-1/2 w-1/2 object-contain" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-dimWhite mt-2 text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
