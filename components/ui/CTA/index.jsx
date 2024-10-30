import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/images/isometric_présentation.png"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import TypewriterText from '../TypewriterText'; // Import du composant TypewriterText

const CTA = () => {
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
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image 
                            src={ctaImage} 
                            className="rounded-lg w-3/4 md:max-w-md" // Réduction de la taille de l'image
                            alt="Plantation Hortenia" 
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Faciliter le Jardinage,
                        </h2>
                        <motion.p
                            ref={ref}
                            className="mt-3 text-gray-600 text-justify"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 1 } }
                            }}
                        >
                            <TypewriterText text="c'est la mission que nous nous sommes fixée. Hortenia est une application qui vous accompagne dans l'entretien de votre jardin, en vous fournissant des conseils personnalisés et des rappels adaptés à vos plantations, mais le plus agréable est la représentation que nous vous fournissons de votre jardin en style isométrique. Rejoignez notre bêta exclusive pour tester notre application en avant première." />
                        </motion.p>
                        <NavLink
                            href="#"
                            className="inline-block mt-4 font-medium text-sm text-white bg-green-600 hover:bg-green-700 active:bg-indigo-800"
                        >
                            rejoindre la bêta
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA;