import { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";

// Define animation variants for initial and animate states
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  // Use Framer Motion's useInView to detect if the component is in the viewport
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"} // Animate when in view
    >
      {/* Container for text content */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          Strategically addressing and resolving coding issues
          <br /> to ensure seamless performance
        </p>
        <hr />
      </motion.div>

      {/* Container for title and button */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button style={{ zIndex: 100 }}>WHAT I DO?</button>
        </div>
      </motion.div>

      {/* Container for skills list */}
      <motion.div className="listContainer" variants={variants} style={{ zIndex: 100 }}>
        {/* Individual skill boxes with hover animation */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img className="skill-img" src="react.png" alt="" />
          <h2 className="skill-name">React.js</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img className="skill-img" src="nextjs.png" alt="" />
          <h2 className="skill-name">Next.js</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img style={{ backgroundColor: "white" }} className="skill-img" src="rest.png" alt="" />
          <h2 className="skill-name">RESTful API's</h2>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img className="skill-img" src="ai.jpg" alt="" />
          <h2 className="skill-name">AI</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
