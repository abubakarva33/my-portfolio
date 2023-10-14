import "./MainSpinner.css";
import { motion } from "framer-motion";

const MainSpinner = () => {
  return (
    <motion.div
      className="spinnerMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <motion.h3
        className="me-2"
        initial={{ opacity: 0, y: "20px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, y: "20px" }}
      >
        Develop Code |
      </motion.h3>
      <motion.h3
        className="me-2"
        initial={{ opacity: 0, y: "20px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, y: "20px" }}
      >
        Create Magic |
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0, y: "20px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, y: "20px" }}
      >
        Navigate Future
      </motion.h3>
    </motion.div>
  );
};

export default MainSpinner;
