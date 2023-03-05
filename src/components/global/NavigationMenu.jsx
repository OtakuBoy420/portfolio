import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../constants/content";
import { useEffect } from "react";

export default function NavigationMenu({ isMenuOpen, setIsMenuOpen, currentSection }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, type: "tween" }}
          className="absolute top-0 left-0 z-10 h-screen w-screen bg-background">
          <ul className="flex h-full flex-col items-center gap-4 px-4 py-24 text-xl">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`transition-colors ${currentSection === item.title ? "text-primary" : "text-white"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
