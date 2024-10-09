import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Hortenia</title>
                <meta name='description' content='Hortenia, votre jardin dans votre poche !' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/images/Feuille.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout