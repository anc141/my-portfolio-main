import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const resumeUrl = '/_data/AmolChaudhari_SSE.pdf';

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineering professional at Walmart.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                Today, I'm immersed in an exhilarating chapter of my journey as a Software Engineer 
                 at the reatil giant <span style={{ color: "var(--hl-color)" }}>Walmart</span>. My domain? The fascinating world of <span style={{ color: "var(--hl-color)" }}>Software development</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Here, I embrace my <span style={{ color: "var(--hl-color)" }}>problem-solving </span>skills 
                and dive headfirst into real-world challenges, drawing from my <span style={{ color: "var(--hl-color)" }}>Computer Science</span>degree 
                from the  <span style={{ color: "var(--hl-color)" }}>Cleveland State University</span>. So here I 
                am, navigating through binary complexities and practical puzzles, all while crafting my own 
                success narrative.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Life is a rich tapestry of experiences, extending far beyond the boundaries of work. 
                When coding isn't my primary focus, I'm engrossed in HOBBY, HOBBY, and nurturing my 
                passion for HOBBY.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>   
              {/* Button to open the resume in a new tab */}
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button className="nav-button" name="Download Resume"/>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
