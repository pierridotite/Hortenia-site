import React from 'react';
import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {

    const testimonials = [
        {
            name: "Raphaël Filliat",
            title: "Commercial de l'application",
            quote: "Je me suis lancé dans cette aventure pour aider les jardiniers amateurs à mieux entretenir leur jardin. Hortenia est une application qui vous accompagne dans l'entretien de votre jardin, en vous fournissant des conseils personnalisés et des rappels adaptés à vos plantations."
        },
        {
            name: "Pierre Raffalli",
            title: "Porteur du projet & Développeur de l'application",
            quote: "Avoir son potager dans son téléphone et pouvoir le gérer de manière ludique et intuitive, c'est ce que nous vous proposons avec Hortenia. Rejoignez notre bêta exclusive pour tester notre application en avant première."
        },
        {
            name: "Roxan Dubois",
            title: "Responsable de la communication",
            quote: "Je m'occupe de la communication autour de l'application Hortenia. Nous avons à coeur de vous proposer une application qui vous accompagne dans l'entretien de votre jardin, en vous fournissant des conseils personnalisés et des rappels adaptés à vos plant"
        }
    ];

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        L'équipe d'Hortenia
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Découvrez les membres de l'équipe Hortenia et leurs motivations.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700 text-justify">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Testimonials;