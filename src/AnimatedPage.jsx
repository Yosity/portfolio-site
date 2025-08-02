import { motion } from "framer-motion";

import "./index.css";
const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="motion-div"
      transition={{
        duration: 0.4,
        when: "beforeChildren",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
