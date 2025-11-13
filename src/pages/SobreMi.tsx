import AboutSection from "../components/AboutMe/AboutSection";
import AboutHeader from "../components/AboutMe/AboutTitle";
import ExtraCards from "../components/AboutMe/ExtraCards";


const About = () => {
  return (
    <div className="about-background">
      <div className="about-container">
        <AboutHeader />
        <AboutSection />
        <ExtraCards />
      </div>
    </div>
  );
};

export default About;