import { motion } from "framer-motion";
import { useState } from "react";
import "./hero.scss";

// Define animation variants for text elements
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Define animation variants for the slider
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 8,
    },
  },
};

const Hero = () => {
  const [isPortfolioVisible, setPortfolioVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  // Function to scroll to a specific section when a button is clicked
  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        {/* Text container with motion animations */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>FIRAS HILABI</motion.h2>
          <motion.h1 style={{ zIndex: 100, userSelect: "none" }} whileHover={{ color: "orange" }} variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => {
                setPortfolioVisible(true);
                setContactVisible(false);
                scrollTo("Portfolio");
              }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => {
                setPortfolioVisible(false);
                setContactVisible(true);
                scrollTo("Contact");
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      {/* Sliding text container with motion animation */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        -----------------
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
