import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const iconVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      scale: 0,
      strokeWidth: 3,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 1 920.55 921.26"
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* First SVG path */}
        <motion.path
          d="m462.568 936.324 c 37.32 -2.01 73.46 -8.62 107.83 -19.02 c 39.8 -12.05 77.36 -29.41 111.85 -51.14 c 131.56 -66.119 207.87 -213.66 214.96 -369.21 H 795.015 C 806.041 630.532 671.261 836.326 537.93 836.326 V 110.251 C 785.752 145.033 782.853 365.319 784.302 421.84 H 895.895 c -26.087 -297.097 -163.766 -389.849 -439.124 -427.529 Z"
          variants={iconVariant2}
          initial="hidden"
          animate="visible"
        />

        {/* Second SVG path */}
        <motion.path
          d="m 435.12 681.97 v 236.597 c -36.954 6.143 -71.129 -14.659 -114.219 -28.032 v -391.77 h -123.327 v 292.219 C -4.791 579.967 43.92 55.9 432.607 -1 L 434.41 0 h 0.47 l 0.24 0.12 v 681.85 Z M 332.828 363.285 H 200.132 C 225.327 218.831 265.64 195.315 331.149 183.557 V 366.645"
          variants={iconVariant1}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
