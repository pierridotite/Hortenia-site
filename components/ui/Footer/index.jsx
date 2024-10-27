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

const Footer = () => (
    <footer>
        <SectionWrapper>
            <div className="custom-screen pt-16">
                <div className="mt-10 py-10 border-t flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-gray-600">© 2024 Hortenia. Tous droits réservés.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
                        {
                            socialInfo.map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href={item.href} 
                                    aria-label={item.label} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="hover:text-gray-600 transition-colors duration-200"
                                >
                                    {item.icon}
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
