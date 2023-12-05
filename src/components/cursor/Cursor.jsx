import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Use useEffect to add and remove the mousemove event listener
  useEffect(() => {
    // Function to update the cursor position
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add a mousemove event listener to update the cursor position
    window.addEventListener("mousemove", mouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    // Create a motion div for the cursor with animation
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;
