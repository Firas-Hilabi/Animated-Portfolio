import Sidebar from "../sidebar/Sidebar";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{userSelect: "none"}}
        >
          WELCOME
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/firas-hilabi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:firasofficial2000@gmail.com" whileHover={{color:"orange"}}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
