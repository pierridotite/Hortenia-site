import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text }) => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.005,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={textVariants}
        >
            {text.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TypewriterText;