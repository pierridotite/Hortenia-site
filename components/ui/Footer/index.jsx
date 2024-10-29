// src/components/Footer/Footer.js

import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'; // Import des icônes
import SectionWrapper from "../../SectionWrapper";

const socialInfo = [
    {
        href: "https://www.instagram.com/horten_ia/",
        icon: <FaInstagram size={24} />,
        label: "Instagram"
    },
    {
        href: "https://www.linkedin.com/company/hortenia/",
        icon: <FaLinkedin size={24} />,
        label: "LinkedIn"
    },
    {
        href: "https://www.tiktok.com/@hortenia_fr",
        icon: <FaTiktok size={24} />,
        label: "TikTok"
    },
];

const legalLinks = [
    {
        href: "/privacy-policy",
        label: "Règles de confidentialité"
    },
    {
        href: "/terms",
        label: "Conditions Générales d'Utilisation (CGU)"
    },
];

const Footer = () => (
    <footer>
        <SectionWrapper>
            <div className="custom-screen pt-16">
                {/* Section Unique avec un seul séparateur */}
                <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
                    {/* Droits d'auteur et Icônes Sociales */}
                    <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-6">
                        <p className="text-gray-600 text-sm">
                            © 2024 Hortenia. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-x-4">
                            {
                                socialInfo.map((item, idx) => (
                                    <a 
                                        key={idx} 
                                        href={item.href} 
                                        aria-label={item.label} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                    >
                                        {item.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    {/* Liens Légaux */}
                    <div className="flex items-center gap-x-6">
                        {
                            legalLinks.map((link, idx) => (
                                <a 
                                    key={idx} 
                                    href={link.href} 
                                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SectionWrapper>
    </footer>
)

export default Footer
