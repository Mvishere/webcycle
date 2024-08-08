import React from 'react';
import { motion } from 'framer-motion';

const FadeInSlideInWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start from invisible and 50px below
            animate={{ opacity: 1, y: 0 }}  // Fade in and slide up to original position
            transition={{ duration: 1 }}    // Adjust the duration as needed
        >
            {children}
        </motion.div>
    );
};

export default FadeInSlideInWrapper;