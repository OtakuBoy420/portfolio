import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CreateSection from "../hoc/CreateSection";
import styles from "../../constants/styles";
import { EarthCanvas } from "../canvas";
import { slideInContact } from "../../utils/motion";

export function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  function handleChange(e) {}
  function handleSubmit(e) {}
  return (
    <AnimatePresence>
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div variants={slideInContact("left", "tween", 0.2, 1)} className="flex-[0.75] rounded-2xl bg-black-100 p-8">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="placeholder:text-dimWhite outlined-none rounded-lg border-none bg-secondary p-4 font-medium text-white shadow-lg"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="placeholder:text-dimWhite outlined-none rounded-lg border-none bg-secondary p-4 font-medium text-white shadow-lg"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows="7"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="placeholder:text-dimWhite outlined-none resize-none rounded-lg border-none bg-secondary p-4 font-medium text-white shadow-lg"
              />
            </label>
            <button type="submit" className="w-fit rounded-xl bg-secondary py-3 px-8 font-bold text-white shadow-md outline-none hover:brightness-110">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div variants={slideInContact("right", "tween", 0.2, 1)} className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1">
          <div className="h-full w-full cursor-grab active:cursor-grabbing">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CreateSection(Contact, "contact");
