import { AnimatePresence, motion } from "framer-motion";
export default function ScrollButton() {
  return (
    <AnimatePresence>
      <div className="absolute z-[4] hidden w-full items-center justify-center xs:bottom-10 lg:flex">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-primary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-primary"
            />
          </div>
        </a>
      </div>
    </AnimatePresence>
  );
}
