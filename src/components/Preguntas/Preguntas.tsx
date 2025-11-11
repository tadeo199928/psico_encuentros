import React from "react";
import { IoAddSharp } from "react-icons/io5";
import "./Preguntas.css";
import type { FAQItem } from "./Faq";
import { NavLink } from "react-router-dom";

const FaqCard = ({
  question,
  answer,
  open,
  btn_label,
  btn_href,
}: {
  question: string;
  answer: string;
  open: boolean;
  btn_label?: string;
  btn_href?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <div className={`fq-container ${isOpen ? "open" : ""}`}>
      <div className="que-container" onClick={() => setIsOpen(!isOpen)}>
        <h1>{question}</h1>
        <IoAddSharp />
      </div>
      {isOpen && (
        <>
          <p className="answers">{answer}</p>
          {btn_label && btn_href && (
            <NavLink className="faq-btn" to={btn_href}>
              {btn_label}
            </NavLink>
          )}
        </>
      )}
    </div>
  );
};

const Preguntas = ({ questions }: { questions: FAQItem[] }) => {
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
              btn_label={item.btn_label}
              btn_href={item.btn_href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preguntas;
