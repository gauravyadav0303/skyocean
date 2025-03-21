import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>#skyocean</p>
          <h2 className={`${styles.communityHeadText} text-center`}>
            Connect. Trade. Thrive. Join the Skyocean Community.
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-7 justify-center mt-10">
          <a href="https://www.linkedin.com/company/skyocean-io" target="_blank" class="c-button c-button--gooey">
            {" "}
            Follow Us on LinkedIn
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ display: "block", height: 0, width: 0 }}
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
              </filter>
            </defs>
          </svg>
          <a href="https://x.com/skyoceanit" target="_blank" class="c-button c-button--gooey">
            {" "}
            Follow Us on X
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ display: "block", height: 0, width: 0 }}
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
