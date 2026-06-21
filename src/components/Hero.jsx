import { motion } from "framer-motion";
import FloatingCube from "./FloatingCube";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="overlay"></div>

      <motion.div
        className="left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="tag">
          NEXT GENERATION DIGITAL SOLUTIONS
        </span>

        <h1>
          Build Amazing
          <span> 3D Experiences </span>
          With React
        </h1>

        <p>
          Professional websites powered by React,
          Vite, Three.js and modern animations.
        </p>

        <button className="heroBtn">
          Explore Now
        </button>
      </motion.div>

      <div className="right">
        <FloatingCube />
      </div>
    </section>
  );
}

export default Hero;