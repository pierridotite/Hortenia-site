import Image from 'next/image'
import IAM from '../../../public/logos/iam.png'
import IAMincu from '../../../public/logos/IAMincu.jpg'
import INRAE from '../../../public/logos/inrae.png'
import AgroSYS from '../../../public/logos/agrosys.png'

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
    {
        src: AgroSYS,
        alt: "AgroSYS"
    },
]

const LogoGrid = () => (
    <div className="logo-banner">
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                LES PARTENAIRES DE HORTENIA
            </h2>
            <div className="logo-container mt-6">
                <ul className="logo-list flex flex-wrap justify-center gap-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx} className="logo-item">
                                <Image 
                                    src={item.src} 
                                    alt={item.alt} 
                                    style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid;
