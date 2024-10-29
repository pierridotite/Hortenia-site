// src/pages/Terms.js

import React from 'react';
import SectionWrapper from "../components/SectionWrapper"; // Assurez-vous que le chemin est correct

const Terms = () => (
    <SectionWrapper>
        <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Conditions Générales d'Utilisation</h1>
                
                <p className="text-gray-600 mb-8">
                    <strong>Dernière mise à jour :</strong> [29/10/2024]
                </p>
                
                {/* Table des Matières */}
                <nav className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table des Matières</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li><a href="#introduction" className="hover:text-gray-800 hover:underline">1. Introduction</a></li>
                        <li><a href="#description-du-service" className="hover:text-gray-800 hover:underline">2. Description du Service</a></li>
                        <li><a href="#acces-au-service" className="hover:text-gray-800 hover:underline">3. Accès au Service</a></li>
                        <li><a href="#obligations-de-lutilisateur" className="hover:text-gray-800 hover:underline">4. Obligations de l'Utilisateur</a></li>
                        <li><a href="#propriete-intellectuelle" className="hover:text-gray-800 hover:underline">5. Propriété Intellectuelle</a></li>
                        <li><a href="#limitation-de-responsabilite" className="hover:text-gray-800 hover:underline">6. Limitation de Responsabilité</a></li>
                        <li><a href="#modifications-des-cgu" className="hover:text-gray-800 hover:underline">7. Modifications des CGU</a></li>
                        <li><a href="#resiliation" className="hover:text-gray-800 hover:underline">8. Résiliation</a></li>
                        <li><a href="#droit-applicable-et-juridiction" className="hover:text-gray-800 hover:underline">9. Droit Applicable et Juridiction</a></li>
                        <li><a href="#contact" className="hover:text-gray-800 hover:underline">10. Contact</a></li>
                    </ul>
                </nav>

                {/* Sections des CGU */}
                <section id="introduction" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
                    <p className="text-gray-600">
                        Bienvenue sur Hortenia. En accédant et en utilisant notre application, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre application.
                    </p>
                </section>

                <section id="description-du-service" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Description du Service</h2>
                    <p className="text-gray-600">
                        Hortenia est une application destinée à accompagner les utilisateurs dans l'entretien de leurs jardins. Elle offre des fonctionnalités telles que la visualisation isométrique des jardins, un calendrier intelligent pour planifier les tâches de jardinage, et des informations détaillées sur l'entretien des plantes.
                    </p>
                </section>

                <section id="acces-au-service" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Accès au Service</h2>
                    <p className="text-gray-600 mb-4">
                        <strong>Inscription :</strong> Pour utiliser certaines fonctionnalités de Hortenia, vous devez créer un compte en fournissant des informations personnelles telles que votre nom, adresse email, mot de passe, et localisation approximative de vos jardins.
                    </p>
                    <p className="text-gray-600">
                        <strong>Sécurité du Compte :</strong> Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités effectuées sous votre compte. En cas de suspicion d'utilisation non autorisée, veuillez nous contacter immédiatement.
                    </p>
                </section>

                <section id="obligations-de-lutilisateur" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Obligations de l'Utilisateur</h2>
                    <p className="text-gray-600">
                        En utilisant Hortenia, vous vous engagez à :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Fournir des informations exactes et à jour lors de l'inscription.</li>
                        <li>Ne pas utiliser l'application à des fins illégales ou non autorisées.</li>
                        <li>Respecter les droits de propriété intellectuelle de Hortenia et des tiers.</li>
                        <li>Ne pas tenter de perturber le fonctionnement de l'application ou d'accéder à des données non autorisées.</li>
                    </ul>
                </section>

                <section id="propriete-intellectuelle" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Propriété Intellectuelle</h2>
                    <p className="text-gray-600">
                        Tous les contenus présents sur Hortenia, y compris les textes, graphiques, logos, icônes, images, clips audio et logiciels, sont la propriété de Hortenia ou de ses concédants et sont protégés par les lois sur la propriété intellectuelle.
                    </p>
                </section>

                <section id="limitation-de-responsabilite" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Limitation de Responsabilité</h2>
                    <p className="text-gray-600">
                        Hortenia s'efforce de fournir un service fiable et sécurisé, mais ne peut garantir l'absence d'erreurs ou d'interruptions. En aucun cas, Hortenia ne pourra être tenue responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité à utiliser l'application.
                    </p>
                </section>

                <section id="modifications-des-cgu" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Modifications des CGU</h2>
                    <p className="text-gray-600">
                        Hortenia se réserve le droit de modifier ces Conditions Générales d'Utilisation à tout moment. Les modifications seront effectives dès leur publication sur cette page. Il est de votre responsabilité de consulter régulièrement les CGU pour vous tenir informé des éventuels changements.
                    </p>
                </section>

                <section id="resiliation" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Résiliation</h2>
                    <p className="text-gray-600">
                        Hortenia peut résilier ou suspendre votre accès à l'application immédiatement, sans préavis, pour toute violation des présentes CGU. Vous pouvez également résilier votre compte à tout moment en suivant les instructions de l'application.
                    </p>
                </section>

                <section id="droit-applicable-et-juridiction" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Droit Applicable et Juridiction</h2>
                    <p className="text-gray-600">
                        Les présentes CGU sont régies par les lois en vigueur dans [votre pays/région]. Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions sera soumis aux tribunaux compétents de [votre juridiction].
                    </p>
                </section>

                <section id="contact" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Contact</h2>
                    <p className="text-gray-600">
                        Pour toute question concernant ces Conditions Générales d'Utilisation, veuillez nous contacter à :
                    </p>
                    <p className="text-gray-600">
                        <strong>Hortenia</strong>  
                        <br />
                        Email : <a href="mailto:contact@hortenia.com" className="text-blue-600 hover:underline">contact@hortenia.com</a>
                    </p>
                </section>

                {/* Lien de retour en haut de la page */}
                <div className="text-center mt-12">
                    <a href="#introduction" className="text-blue-600 hover:underline">Retour en haut</a>
                </div>
            </div>
        </div>
        </SectionWrapper>
    );

    export default Terms;
