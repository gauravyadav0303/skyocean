import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.055, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Why Join <span class="text-[#007AFF]">Skyocean?</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span class="text-[#007AFF]">@For Everyone:</span> <br />
        <ul className="list-disc list-inside">
          <li>Access global trade opportunities regardless of experience.</li>
          <li>
            Experience transparent, secure blockchain-verified transactions.
          </li>
          <li>
            Get access to global trade finance without traditional limitations.
          </li>
        </ul>
          <br />
          <br />
        <span class="text-[#007AFF]">@Early Adopters Get:</span> <br />
        <ul className="list-disc list-inside">
          <li>Priority platform access.</li>
          <li>Personalized demo sessions.</li>
          <li>Input on platform development.</li>
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
