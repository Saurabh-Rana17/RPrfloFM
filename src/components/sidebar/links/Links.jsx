import { motion } from "framer-motion";
import React from "react";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div variants={variants} className="links">
      {items.map((item) => (
        <motion.a
          whileHover={{ scale: 1.1, transition: { type: "spring" } }}
          whileTap={{ scale: 0.9, transition: { type: "spring" } }}
          variants={itemVariants}
          href={`#${item}`}
          key={item}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
