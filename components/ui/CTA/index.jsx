import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/images/garden.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Plantation Hortenia" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Faciliter le Jardinage,
                        </h2>
                        <p className="mt-3 text-gray-600">
                           c'est la mission que nous nous sommes fixée. Hortenia est une application qui vous accompagne dans l'entretien de votre jardin, 
                           en vous fournissant des conseils personnalisés et des rappels adaptés à vos plantations, mais le plus agréable est la représentation
                           que nous vous fournissons de votre jardin en style isométrique.
                           Rejoignez notre bêta exclusive pour tester notre application en avant première.
                        </p>
                        <NavLink
                            //remonter en haut de la page
                            href="#"
                            className="inline-block mt-4 font-medium text-sm text-white bg-green-600 hover:bg-green-700 active:bg-indigo-800"
                        >
                            rejoindre la bêta
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA