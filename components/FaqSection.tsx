"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es y cómo funciona Airbnb?",
    answer:
      "Airbnb es una plataforma que conecta a huéspedes con anfitriones que ofrecen alojamientos únicos alrededor del mundo. Buscás, reservás y pagás todo desde la plataforma de forma segura.",
  },
  {
    question: "¿Cómo se usan los filtros de búsqueda?",
    answer:
      "Podés usar las categorías y el buscador en la parte superior para encontrar alojamientos según tus preferencias de ubicación, tipo de espacio y comodidades.",
  },
  {
    question: "¿Tengo que conocer al anfitrión en persona?",
    answer:
      "No es necesario. Toda la comunicación y coordinación del check-in puede hacerse a través de la plataforma antes de tu llegada.",
  },
  {
    question:
      "¿Qué pasa si tengo que cancelar una reservación debido a un problema con el alojamiento o el anfitrión?",
    answer:
      "Contamos con políticas de cancelación flexibles y un equipo de soporte disponible para ayudarte a resolver cualquier inconveniente con tu reserva.",
  },
  {
    question: "¿Necesito más información?",
    answer:
      "Podés contactar a nuestro equipo de soporte desde el centro de ayuda disponible en cualquier momento.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-8 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Respondemos a tus preguntas</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            type="button"
            onClick={() =>
              setOpenIndex((current) => (current === index ? null : index))
            }
            className="flex justify-between items-center w-full text-left font-medium"
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="text-gray-500 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
