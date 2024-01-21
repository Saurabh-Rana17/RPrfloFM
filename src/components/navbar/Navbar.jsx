import { motion } from "framer-motion";
import "./navbar.scss";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* siebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Saurabh Rana
        </motion.span>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0, y: 10 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="social"
        >
          <motion.a
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            href="#"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            href="#"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            href="#"
          >
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            href="#"
          >
            <img src="/dribbble.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
