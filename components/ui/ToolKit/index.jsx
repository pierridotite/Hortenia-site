import React from 'react';
import { FaClock, FaCube, FaUsers } from 'react-icons/fa';
import SectionWrapper from '../../SectionWrapper';

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

    return (
        <SectionWrapper>
            <div id="beta-benefits" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Pourquoi rejoindre la bêta ?
                    </h2>
                    <p>Découvrez les avantages exclusifs pour nos bêta-testeurs :</p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                                    <p className="mt-3">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BetaBenefits;