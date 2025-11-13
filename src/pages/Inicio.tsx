import Hero from "../components/Hero/Hero";
import { FAQ } from "../components/Preguntas/Faq";
import Preguntas from "../components/Preguntas/Preguntas";
import AreasFlipper from "../components/Areas/AreasFlipper";
import { Areas } from "../components/Areas/Areas";

const Home = () => {
  const faq = FAQ;
  return (
    <>
      <Hero />
      <Preguntas questions={faq} />
      <AreasFlipper areas={Areas} />
    </>
  );
};

export default Home;
