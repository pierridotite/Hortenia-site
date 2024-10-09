import React from 'react';
import { FaClock, FaCube, FaUsers } from 'react-icons/fa';
import SectionWrapper from '../../SectionWrapper';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BetaBenefits = () => {
    const benefits = [
        {
            icon: <FaClock className="w-6 h-6" />,
            title: "Accès anticipé aux fonctionnalités",
            desc: "Soyez parmi les premiers à découvrir et utiliser les nouvelles fonctionnalités de notre application.",
        },
        {
            icon: <FaCube className="w-6 h-6" />,
            title: "Donner des retours précieux",
            desc: "Aidez-nous à améliorer l’application en fournissant des retours et suggestions basés sur votre expérience.",
        },
        {
            icon: <FaUsers className="w-6 h-6" />,
            title: "Rejoindre une communauté de passionnés",
            desc: "Faites partie d’une communauté de passionnés de jardinage et échangez avec d’autres bêta-testeurs.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <SectionWrapper>
            <div id="beta-benefits" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Pourquoi rejoindre la bêta ?
                    </h2>
                </div>
                <motion.ul
                    ref={ref}
                    className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mt-8"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {
                        benefits.map((item, idx) => (
                            <motion.li key={idx} className="space-y-3" variants={itemVariants}>
                                <div className="w-12 h-12 border text-black-400 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
        </SectionWrapper>
    )
}

export default BetaBenefits;