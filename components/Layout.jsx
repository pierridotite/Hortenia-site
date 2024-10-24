import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
    const router = useRouter();

    // Routes où la navbar et le footer doivent être masqués
    const hideNavbarRoutes = ['/admin/dashboard', '/admin/login'];

    return (
        <>
            <Head>
                <title>Hortenia</title>
                <meta name='description' content='Hortenia, votre jardin dans votre poche !' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/images/Feuille.png' />
            </Head>
            
            {/* Condition pour afficher ou masquer la Navbar et le Footer */}
            {!hideNavbarRoutes.includes(router.pathname) && <Navbar />}
            
            <main>{children}</main>
            
            {/* Masquer le footer également si nécessaire */}
            {!hideNavbarRoutes.includes(router.pathname) && <Footer />}
        </>
    );
}

export default Layout;
