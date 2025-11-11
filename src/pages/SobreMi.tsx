import AboutSection from "../components/AboutMe/AboutSection";
import AboutHeader from "../components/AboutMe/AboutTitle";
import { Areas } from "../components/AboutMe/Areas";
import ExtraCards from "../components/AboutMe/ExtraCards";
import AreasFlipper from "../components/AboutMe/AreasFlipper";

const About = () => {
  return (
    <div className="about-background">
      <div className="about-container">
        <AboutHeader />
        <AboutSection />
        <AreasFlipper areas={Areas} />
        <ExtraCards />
      </div>
    </div>
  );
};

export default About;