import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0, variants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
