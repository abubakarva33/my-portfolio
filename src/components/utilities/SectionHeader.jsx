import { motion } from "framer-motion";
const SectionHeader = ({ title, Children }) => {
  return (
    <>
      <motion.h3
        initial={{ x: "-100px" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "-100px" }}
        className="sectionHeader mt-3"
      >
        {title}
      </motion.h3>
      {Children}
    </>
  );
};

export default SectionHeader;
