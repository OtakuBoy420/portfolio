import styles from "../constants/styles";
import { slideUp, slideIn } from "../utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TiltImage from "../components/subcomponents/TiltImage";

export default function HomePage() {
  return (
    <AnimatePresence>
      <motion.section initial="hidden" whileInView="show" id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
          <motion.div variants={slideIn("left", "spring", 0.8, 2)} className="bg-white-gradient mb-2  hidden flex-row items-center rounded-[10px] py-[6px] px-3 ss:block">
            <p className={`${styles.paragraph} mx-2`}>
              <Award className="inline text-secondary" /> Graduated <span className="font-semibold">Web Development</span> at <span className="font-semibold">RTS</span>
            </p>
          </motion.div>
          <motion.h1 variants={slideUp(0.1)} className="mb-6 text-4xl font-bold leading-tight text-white ss:text-5xl xl:text-7xl">
            Oliver Zeymer
          </motion.h1>
          <motion.div className=" text-2xl font-semibold leading-tight text-white ss:text-4xl xl:text-6xl" variants={slideUp(0.3)}>
            <h2 className="">Hi! I am a</h2>
            <h2 className="text-gradient">Frontend Developer</h2>
          </motion.div>
          <motion.p variants={slideUp(0.5)} className={`${styles.paragraph} mt-6 max-w-[470px]`}>
            Welcome! I'm Oliver. A 21 year old developer from Denmark with a huge interest in Web. I am currently working part time as a Frontend Developer at{" "}
            <a href="https://www.octocubegames.com" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4">
              Octocube Games
            </a>
            . Scroll further down to see my projects and contact me if you want to know more!
          </motion.p>
        </div>

        <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
          <TiltImage imageUrl="https://cdn.discordapp.com/attachments/629956796802400257/1080575291631607838/avatardone2.png" />

          {/* gradient start */}
          <div className="pink-gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
          <div className="white-gradient absolute bottom-0 z-[1] h-[80%] w-[80%] rounded-full" />
          <div className="blue-gradient absolute bottom-0 right-20 z-[0] h-[50%] w-[50%]" />
          {/* gradient end */}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
