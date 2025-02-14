import { motion } from "framer-motion";

const Service = ({ data }) => {
  const { title, description, img } = data;

  return (
    <div className="cardContainer pb-2">
      <div>
        <div style={{ borderBottom: "5px var(--color-bg-primary) groove", overflow: "hidden" }}>
          <motion.img
            src={img}
            loading="lazy"
            alt={title}
            maxHeight="350px"
            className="cardImg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            exit={{ opacity: 0, scale: 0.5 }}
          />
        </div>

        <motion.div
          className="serviceCardDetails px-2"
          initial={{ y: "100px", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ y: "100px", opacity: 0.5 }}
        >
          <p className="cardTitle">{title}</p>
          <p className="cardDetails">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
