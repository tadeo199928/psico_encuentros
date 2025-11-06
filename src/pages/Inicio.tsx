import Hero from "../components/Hero/Hero";
import { FAQ } from "../components/Preguntas/Faq";
import Preguntas from "../components/Preguntas/Preguntas";

const Home = () => {
  const faq = FAQ
  return (
    <>
      <Hero />
      <Preguntas questions={faq} />
    </>
  );
};

export default Home;
