import styles from "../../constants/styles";
import { fadeIn, slideIn, slideInL, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import TiltImage from "../subcomponents/TiltImage";
import logo from "../../assets/logo.png";
import ScrollButton from "../subcomponents/ScrollButton";

export default function Hero() {
  return (
    <div className="relative h-full lg:min-h-screen">
      <div key="background" className="absolute inset-0 h-full bg-hero-pattern bg-cover bg-no-repeat xs:bg-center" />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="home"
        className={`relative mx-auto flex max-w-8xl flex-col py-24 lg:min-h-screen 2xl:pt-36 ${styles.paddingX} `}>
        <article className="relative flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
          <div className={`flex-1 ${styles.flexStart} flex-col items-center xs:items-start`}>
            <motion.h1 variants={slideIn(0.1)} className={styles.heroHeadText}>
              Oliver Zeymer
            </motion.h1>
            <motion.div className={styles.heroSubHeadingText} variants={slideIn(0.3)}>
              <h2>
                Hi! I am a{" "}
                <span className="text-primary">
                  <motion.span className="inline-block" variants={slideIn(1)}>
                    Frontend
                  </motion.span>{" "}
                  <motion.span className="inline-block" variants={slideIn(2)}>
                    &amp;
                  </motion.span>{" "}
                  <motion.span className="inline-block" variants={slideIn(3)}>
                    Backend
                  </motion.span>
                </span>{" "}
                developer.
              </h2>
            </motion.div>
            <motion.p variants={slideIn(0.5)} className={`${styles.paragraph} text-shadow z-[1] mt-0 text-xl xs:max-w-[90%] lg:mt-4`}>
              Welcome! I'm Oliver. A 21 year old developer from Denmark with a huge interest in web. I am currently working part time as a Web Developer at{" "}
              <a href="https://www.octocubegames.com" target="_blank" rel="noreferrer" className="font-semibold text-white underline underline-offset-4">
                Octocube Games
              </a>
              .
            </motion.p>
            <motion.a
              variants={fadeIn("up", "spring", 0.7, 1)}
              href="#contact"
              className="mt-8 w-full rounded-lg border-2 border-primary bg-white/5  py-4 px-6 text-center text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-dimBlue/25">
              Contact Me
            </motion.a>
          </div>
          <div className={`relative my-10 flex h-fit  flex-1 md:my-0`}>
            <TiltImage imageUrl={logo} />
            <div className="blue-gradient" />
          </div>
          <motion.div
            variants={slideInL("right", "spring", 0.7, 1.75)}
            className="left-0 top-0 flex flex-row items-center justify-center rounded-xl bg-black/40 py-1.5 px-3 text-center shadow backdrop-blur-sm lg:absolute lg:block 2xl:top-10">
            <p className={`${styles.paragraph} mx-2`}>
              <Award className="inline text-primary" /> Graduated <span className="font-semibold">Web Development</span> at <span className="font-semibold">RTS </span>
              <span className="hidden sm:inline-block">- 23/03/2023</span>
            </p>
          </motion.div>
        </article>
        <ScrollButton />
      </motion.section>
    </div>
  );
}
