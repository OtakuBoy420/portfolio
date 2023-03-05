import { Outlet } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/global/Navbar";
export default function Layout() {
  return (
    <div className={`relative z-0`}>
      <AnimatePresence>
        <Navbar />
      </AnimatePresence>
      <motion.main className="overflow-x-hidden" initial={{ opacity: 0, y: 24 }} exit={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}>
        <Outlet />
      </motion.main>
    </div>
  );
}
