import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Rejoignez la bêta exclusive d'Hortenia pour tester notre application de jardinage innovante. Calendrier intelligent, vue isométrique et conseils personnalisés." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hortenia - Jardinez bien accompagné" />
        <meta property="og:description" content="Hortenia propose une expérience de jardinage unique : conseils, rappels, et gestion ludique de votre jardin." />
        <meta property="og:image" content="http://hortenia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fisometric_pr%C3%A9sentation.c3b557e3.png&w=1080&q=75" />
        <meta property="og:url" content="https://hortenia.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hortenia - Jardinez bien accompagné" />
        <meta name="twitter:description" content="Accédez aux fonctionnalités innovantes d'Hortenia et transformez votre jardinage." />
        <meta name="twitter:image" content="http://hortenia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fisometric_pr%C3%A9sentation.c3b557e3.png&w=1080&q=75" />
      </Head>
      <Hero />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
