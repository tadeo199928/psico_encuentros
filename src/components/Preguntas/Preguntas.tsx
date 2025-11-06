import React from "react";
import { IoAddSharp } from "react-icons/io5";
import "./Preguntas.css";

const FaqCard = ({
  question,
  answer,
  open,
}: {
  question: string;
  answer: string;
  open: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <div className={`fq-container ${isOpen ? "open" : ""}`}>
      <div className="que-container" onClick={() => setIsOpen(!isOpen)}>
        <h1>{question}</h1>
        <IoAddSharp />
      </div>
      {isOpen && <p className="answers">{answer}</p>}
    </div>
  );
};

const Preguntas = ({
  questions,
}: {
  questions: Array<{ question: string; answer: string; open: boolean }>;
}) => {
  return (
    <section className="faq-section">
      <div className="wrap-faq">
        <div className="faq-left">
          <h1>¿Alguna pregunta?</h1>
          <img src="/questions.png" alt="Ilustración de preguntas" />
          <p>
            "No hay preguntas tontas, solo respuestas que esperan ser
            descubiertas."
          </p>
        </div>
        <div className="preguntas-respuestas">
          {questions.map((item, index) => (
            <FaqCard
              key={index}
              question={item.question}
              answer={item.answer}
              open={item.open}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
