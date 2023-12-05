import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

// Define animation variants for opening and closing the sidebar
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)", // Expands the sidebar
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)", // Collapses the sidebar
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* Create a motion div for the background with clip-path animation */}
      <motion.div className="bg" variants={variants}>
        <Links /> {/* Render links inside the sidebar */}
      </motion.div>
      {/* Render a toggle button to control the sidebar open/close state */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
