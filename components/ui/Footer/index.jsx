const socialInfo = [

]

const Footer = () => (
    <footer>
        <div className="custom-screen pt-16">
            <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                <p className="text-gray-600">© 2024 Hortenia. Tous droits réservés.</p>
                <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                    {
                        socialInfo.map((item, idx) => (
                            <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
)

export default Footer