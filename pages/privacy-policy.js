// src/pages/PrivacyPolicy.js

import React from 'react';
import SectionWrapper from "../components/SectionWrapper"; // Assurez-vous que le chemin est correct

const PrivacyPolicy = () => (
    <SectionWrapper>
        <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Politique de Confidentialité</h1>
                
                <p className="text-gray-600 mb-8">
                    <strong>Dernière mise à jour :</strong> [29/10/2024]
                </p>
                
                {/* Table des Matières */}
                <nav className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Table des Matières</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li><a href="#introduction" className="hover:text-gray-800 hover:underline">1. Introduction</a></li>
                        <li><a href="#collecte-de-donnees" className="hover:text-gray-800 hover:underline">2. Collecte de Données Personnelles</a></li>
                        <li><a href="#utilisation-des-donnees" className="hover:text-gray-800 hover:underline">3. Utilisation des Données Personnelles</a></li>
                        <li><a href="#partage-des-donnees" className="hover:text-gray-800 hover:underline">4. Partage des Données Personnelles</a></li>
                        <li><a href="#stockage-et-securite" className="hover:text-gray-800 hover:underline">5. Stockage et Sécurité des Données</a></li>
                        <li><a href="#duree-de-conservation" className="hover:text-gray-800 hover:underline">6. Durée de Conservation des Données</a></li>
                        <li><a href="#droits-des-utilisateurs" className="hover:text-gray-800 hover:underline">7. Droits des Utilisateurs</a></li>
                        <li><a href="#cookies-et-technologies" className="hover:text-gray-800 hover:underline">8. Cookies et Technologies de Suivi</a></li>
                        <li><a href="#services-tiers" className="hover:text-gray-800 hover:underline">9. Services Tiers</a></li>
                        <li><a href="#base-legale" className="hover:text-gray-800 hover:underline">10. Base Légale pour le Traitement des Données</a></li>
                        <li><a href="#consentement" className="hover:text-gray-800 hover:underline">11. Consentement des Utilisateurs</a></li>
                        <li><a href="#modifications" className="hover:text-gray-800 hover:underline">12. Modifications de la Politique de Confidentialité</a></li>
                        <li><a href="#contact" className="hover:text-gray-800 hover:underline">13. Contact</a></li>
                    </ul>
                </nav>

                {/* Sections de la Politique de Confidentialité */}
                <section id="introduction" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
                    <p className="text-gray-600">
                        Bienvenue sur Hortenia. Nous nous engageons à protéger la confidentialité et la sécurité de vos données personnelles. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre application.
                    </p>
                </section>

                <section id="collecte-de-donnees" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Collecte de Données Personnelles</h2>
                    <p className="text-gray-600 mb-4">
                        Nous collectons les types de données personnelles suivants auprès de nos utilisateurs :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Informations d'identification personnelle :</strong> Nom, prénom, adresse email, mot de passe (chiffré).</li>
                        <li><strong>Informations de localisation :</strong> Localisation approximative (ville) des jardins créés.</li>
                        <li><strong>Données relatives aux jardins :</strong> Informations liées aux jardins que vous avez créés.</li>
                        <li><strong>Données statistiques sur l'application :</strong> Vues des pages, actions spécifiques effectuées dans l'application.</li>
                    </ul>
                </section>

                <section id="utilisation-des-donnees" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Utilisation des Données Personnelles</h2>
                    <p className="text-gray-600 mb-4">
                        Les données que nous collectons sont utilisées pour :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Fournir nos services :</strong> Gérer votre compte, créer et maintenir vos jardins virtuels.</li>
                        <li><strong>Communications :</strong> Envoyer des emails concernant votre compte, des mises à jour de l'application et des offres spéciales.</li>
                        <li><strong>Amélioration de l'application :</strong> Analyser l'utilisation de l'application pour en améliorer les fonctionnalités et l'expérience utilisateur.</li>
                    </ul>
                </section>

                <section id="partage-des-donnees" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Partage des Données Personnelles</h2>
                    <p className="text-gray-600 mb-4">
                        Hortenia ne partage pas vos données personnelles avec des tiers, à l'exception des partenaires publicitaires mentionnés ci-dessous :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Partenaires Publicitaires :</strong> Nous pouvons partager certaines données anonymisées avec des partenaires publicitaires pour vous proposer des annonces pertinentes.</li>
                    </ul>
                </section>

                <section id="stockage-et-securite" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Stockage et Sécurité des Données</h2>
                    <p className="text-gray-600">
                        Vos données personnelles sont stockées sur des serveurs sécurisés utilisant <strong>MongoDB</strong>. Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, divulgation, modification ou destruction.
                    </p>
                </section>

                <section id="duree-de-conservation" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Durée de Conservation des Données</h2>
                    <p className="text-gray-600 mb-4">
                        Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et pour respecter nos obligations légales. Cela inclut :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li><strong>Conservation jusqu'à la suppression :</strong> Vos données seront conservées jusqu'à ce que vous décidiez de supprimer votre compte.</li>
                    </ul>
                    <p className="text-gray-600">
                        <em>Remarque :</em> La durée de conservation des données doit être conforme aux réglementations locales. Nous vous recommandons de consulter un professionnel juridique pour vous assurer que cette pratique est légale dans votre juridiction.
                    </p>
                </section>

                <section id="droits-des-utilisateurs" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Droits des Utilisateurs</h2>
                    <p className="text-gray-600 mb-4">
                        Conformément aux lois applicables, vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                        <li><strong>Accès :</strong> Vous pouvez accéder à vos données personnelles que nous détenons.</li>
                        <li><strong>Rectification :</strong> Vous pouvez demander la correction de données personnelles inexactes ou incomplètes.</li>
                        <li><strong>Suppression :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
                        <li><strong>Opposition :</strong> Vous pouvez vous opposer au traitement de vos données dans certaines circonstances.</li>
                        <li><strong>Portabilité :</strong> Vous pouvez demander la transmission de vos données personnelles à un autre responsable du traitement.</li>
                    </ul>
                    <p className="text-gray-600">
                        Pour exercer ces droits, veuillez nous contacter à : <a href="mailto:contact@hortenia.com" className="text-blue-600 hover:underline">contact@hortenia.com</a>.
                    </p>
                </section>

                <section id="cookies-et-technologies" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Cookies et Technologies de Suivi</h2>
                    <p className="text-gray-600 mb-4">
                        Hortenia utilise des <strong>cookies</strong> et des technologies similaires pour :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                        <li><strong>Améliorer l'expérience utilisateur :</strong> Personnaliser le contenu et les recommandations.</li>
                        <li><strong>Analyser l'utilisation de l'application :</strong> Collecter des données statistiques sur la manière dont vous utilisez notre application.</li>
                    </ul>
                    <p className="text-gray-600">
                        Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                    </p>
                </section>

                <section id="services-tiers" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Services Tiers</h2>
                    <p className="text-gray-600 mb-4">
                        Hortenia utilise des services tiers pour :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                        <li><strong>Publicité :</strong> Nos partenaires publicitaires peuvent utiliser des cookies et des technologies de suivi pour diffuser des annonces pertinentes.</li>
                    </ul>
                </section>

                <section id="base-legale" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Base Légale pour le Traitement des Données</h2>
                    <p className="text-gray-600 mb-4">
                        Nous traitons vos données personnelles sur les bases légales suivantes :
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                        <li><strong>Exécution d'un contrat :</strong> Le traitement nécessaire pour fournir nos services et gérer votre compte.</li>
                        <li><strong>Consentement :</strong> Lorsque vous acceptez de recevoir des communications marketing.</li>
                        <li><strong>Intérêts légitimes :</strong> Pour améliorer notre application et analyser son utilisation afin de mieux répondre à vos besoins.</li>
                    </ul>
                </section>

                <section id="consentement" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Consentement des Utilisateurs</h2>
                    <p className="text-gray-600 mb-6">
                        En vous inscrivant ou en vous connectant à Hortenia, vous acceptez explicitement notre Politique de Confidentialité et consentez à la collecte et au traitement de vos données personnelles comme décrit ci-dessus. Vous pouvez retirer votre consentement à tout moment en supprimant votre compte.
                    </p>
                </section>

                <section id="modifications" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">12. Modifications de la Politique de Confidentialité</h2>
                    <p className="text-gray-600 mb-6">
                        Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette Politique de Confidentialité pour rester informé de tout changement.
                    </p>
                </section>

                <section id="contact" className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">13. Contact</h2>
                    <p className="text-gray-600 mb-4">
                        Pour toute question ou préoccupation concernant cette Politique de Confidentialité, veuillez nous contacter à :
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

    export default PrivacyPolicy;
