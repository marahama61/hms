// import { useTranslation } from "react-i18next";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

function Home() {
  // const { i18n } = useTranslation();

  return (
    <>
      {/* <TopHeader />
      <Navbar /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
