import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Alors prêt à commencer ?
                </h2>
                <p className="mt-3 text-gray-600">
                   rejoignez notre bêta exclusive pour tester notre application en avant première.
                </p>
                <NavLink
                    href="#"
                    className="mt-4 inline-block font-medium text-sm text-white bg-green-600 hover:bg-green-700 active:bg-gray-900"
                >
                    Commencer
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA