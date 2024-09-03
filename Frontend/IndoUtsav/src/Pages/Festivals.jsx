import React from "react";
import "./FestivalStyle.css";
import IndiaLogo from "../Images/logo.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../MotionVariants";
import WaterDropGrid from "../Components/WaterDropGrid";

export const Festivals = () => {
  return (
    <section className="slide1 relative">
      <WaterDropGrid className="absolute top-0 left-0 w-full h-full" />
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="header"
        >
          <div className="logo">
            <img src={IndiaLogo} alt="Delight in Diversity Logo" />
          </div>
          <motion.div
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="top"
          >
            DELIGHT IN DIVERSITY
          </motion.div>
          <div className="year">2024</div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="title"
          >
            FESTIVITIES
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="subtitle"
          >
            Experience the Vibrant Tapestry of India's Festive Spirit
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Festivals;