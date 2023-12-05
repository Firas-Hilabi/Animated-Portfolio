import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Array of portfolio items with details
const items = [
  {
    id: 1,
    title: "Next.js E-Commerce",
    img: "/E-commerce-img.webp",
    desc: "Next.js E-Commerce is a cutting-edge e-commerce platform built on Next.js and Payload CMS, boasting an advanced authentication system and a seamless payment process powered by Stripe. This platform not only provides a secure and user-friendly shopping experience but also ensures that your sensitive payment information is handled with the utmost care. Explore the website to discover a world of products and enjoy a smooth and trustworthy online shopping experience",
    websiteLink: "https://hilabi.payloadcms.app/",
  },
  {
    id: 2,
    title: "React 3D Modeling with AI Prompting",
    img: "/OpenAI-DALL-E.png.webp",
    desc: "React 3D Modeling with AI Prompting is a remarkable project that brings 3D modeling to a whole new level. This innovative website leverages AI technology, specifically DALL-E, to enable real-time customization of 3D models. Users can interactively modify and enhance their 3D creations while requesting the AI to generate corresponding images. Immerse yourself in the world of 3D creativity and AI synergy",
    websiteLink: "https://3d.firashilabi.com",
  },
  {
    id: 3,
    title: "Royal Defenders",
    img: "/royal_defenders.png",
    desc: "Royal Defenders is not just your typical tower defense game; it's a research-driven endeavor that delves into the realm of search algorithms and the integration of AI in gaming. Created in collaboration with colleagues, this game offers a captivating experience where strategic thinking and AI-driven elements combine to provide an engaging and challenging gameplay. Dive into the world of Royal Defenders and explore the future of AI in gaming by playing it on itch.io",
    websiteLink: "https://allia1999.itch.io/royal-defenders",
  },
  {
    id: 4,
    title: "Dawai Platform",
    img: "/Dawai.jpeg",
    desc: "Dawai is the revolutionary platform that seamlessly brings together the realms of prescribing, dispensing, monitoring, and scheduling medication. It's the ultimate synergy of healthcare, connecting physicians, pharmacists, and patients to eliminate potentially fatal human errors in medication management. While this groundbreaking platform is still evolving in its development journey, you can explore the website to stay in the loop and anticipate the game-changing innovations that lie ahead!",
    websiteLink: "https://www.dawai.me",
  },
];

// Single portfolio item component
const Single = ({ item }) => {
  const ref = useRef();

  // Use Framer Motion's useScroll to track scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Create a vertical motion value for image translation
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={(`.${item.img}`)} alt="" />
          </div>
          {/* Create a motion div for text with vertical translation */}
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
              <button style={{ zIndex: 100 }}>Visit The Website</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio component
const Portfolio = () => {
  const ref = useRef();

  // Use Framer Motion's useScroll to track scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Create a horizontal motion value for scaling the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        {/* Create a motion div for the horizontal progress bar */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {/* Map through portfolio items and render each as a Single component */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
