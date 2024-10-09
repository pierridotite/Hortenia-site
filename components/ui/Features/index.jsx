import SectionWrapper from "../../SectionWrapper"
import { AiOutlineClockCircle, AiOutlinePicture, AiOutlineInfoCircle } from "react-icons/ai"; // Import des icônes de react-icons

const Features = () => {

    const features = [
        {
            icon: <AiOutlineClockCircle className="w-6 h-6" />, // Icône calendrier
            title: "Calendrier intelligent et adaptatif",
            desc: "Recevez des rappels et des conseils adaptés à vos disponibilités grâce à notre calendrier intelligent. Planifiez vos tâches de jardinage en fonction de vos horaires personnels pour une meilleure organisation."
        },
        {
            icon: <AiOutlinePicture className="w-6 h-6" />, // Icône vue isométrique
            title: "Représentation du jardin en style isométrique",
            desc: "L'application propose une vue en style isométrique de votre jardin, remplie de nombreux détails amusants et interactifs. Explorez chaque recoin et amusez-vous à personnaliser l'agencement de vos plantes de manière ludique et intuitive."
        },
        {
            icon: <AiOutlineInfoCircle className="w-6 h-6" />, // Icône informations
            title: "Informations sur l'entretien des plantes",
            desc: "Découvrez de nombreuses informations sur l'entretien des plantes, de la fertilisation aux meilleures pratiques pour les soins saisonniers. Un module interactif pourrait permettre d'accéder facilement à des guides et fiches pratiques."
        }
    ];

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 border text-green-400 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features;
