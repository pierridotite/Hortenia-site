import { useState, useEffect } from 'react';
import Image from 'next/image';
import IAM from '../../../public/logos/iam.png';
import IAMincu from '../../../public/logos/IAMincu.jpg';
import INRAE from '../../../public/logos/inrae.png';
import React from "react";
import { FlipWords } from "../flip-words";

const logos = [
    {
        src: IAM,
        alt: "Institut Agro Montpellier"
    },
    {
        src: IAMincu,
        alt: "Agro vallée incubation"
    },
    {
        src: INRAE,
        alt: "INRAE"
    },
];

const Hero = () => {
    const [heroHeight, setHeroHeight] = useState('100vh');
    const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer l'affichage de la notification
    const words = ["Transformez", "Améliorez", "Découvrez", "Partagez"];

    useEffect(() => {
        const navbarHeight = 80; // Hauteur de la barre de navigation
        const handleResize = () => {
            setHeroHeight(`calc(100vh - ${navbarHeight}px)`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Gestionnaire de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche la soumission par défaut du formulaire
        const form = e.target;
        const data = new FormData(form);

        // Envoie des données via Fetch pour Netlify Forms
        fetch("/", {
            method: "POST",
            body: data,
        })
        .then(() => {
            setIsSubmitted(true); // Affiche le message de remerciement après soumission
            form.reset(); // Réinitialise le formulaire
            // Cache la notification après 5 secondes
            setTimeout(() => setIsSubmitted(false), 5000);
        })
        .catch((error) => alert(error));
    };

    return (
        <section style={{ height: heroHeight }} className="flex flex-col justify-center">
            <div className="custom-screen text-gray-600">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                        <FlipWords words={words} /> votre jardin avec <span className="text-green-600">Hortenia</span>
                    </h1>
                    <p className="max-w-xl mx-auto pb-14">
                        Rejoignez notre bêta exclusive pour tester notre application en avant première.
                    </p>

                    {/* Formulaire avec gestionnaire de soumission */}
                    <form 
                        name="email-signup" 
                        method="POST" 
                        data-netlify="true" 
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit} // Ajout du gestionnaire de soumission
                        className="flex items-center justify-center gap-x-3 font-medium text-sm mt-8"
                    >
                        <input type="hidden" name="form-name" value="email-signup" />
                        <p className="hidden">
                            <label>Ne pas remplir : <input name="bot-field" /></label>
                        </p>
                        <p>
                            <label>Email <input
                                type="email"
                                name="email"
                                placeholder="Entre ton adresse email"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                            /></label>
                        </p>
                        <p>
                            <button
                                type="submit"
                                className="text-white bg-green-600 hover:bg-green-800 active:bg-gray-900 px-4 py-2 rounded-md"
                            >
                                Rejoindre la bêta
                            </button>
                        </p>
                    </form>

                    {/* Notification de remerciement */}
                    {isSubmitted && (
                        <div className="mt-4 text-green-600 font-semibold">
                            Merci pour votre inscription ! Nous vous enverrons un email pour la suite.
                        </div>
                    )}
                </div>
            </div>

            {/* Section des logos partenaires */}
            <div className="logo-banner mt-8">
                <div className="custom-screen">
                    <h2 className="font-semibold text-sm text-gray-600 text-center">
                        LES PARTENAIRES DE HORTENIA
                    </h2>
                    <div className="logo-container mt-6">
                        <ul className="logo-list flex flex-wrap justify-center gap-4">
                            {logos.map((item, idx) => (
                                <li key={idx} className="logo-item">
                                    <Image 
                                        src={item.src} 
                                        alt={item.alt} 
                                        width={100}
                                        height={100}
                                        objectFit="contain"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomePage = () => (
    <>
        <Hero />
    </>
);

export default HomePage;