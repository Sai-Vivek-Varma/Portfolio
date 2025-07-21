import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoShowcase from "./sections/LogoShowcase";
import FeaturedCards from "./sections/FeaturedCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeaturedCards />
    <ExperienceSection />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
