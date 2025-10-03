import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqEs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cuál es la diferencia entre una S.A y una LLC?',
      answer: 'La S.A permite emitir acciones y requiere una gobernanza corporativa más formal—ideal para crecer y atraer inversión. La LLC ofrece gestión flexible y menos formalidades, con protección de activos personales.'
    },
    {
      question: '¿Cuánto tiempo toma formar una empresa en Panamá?',
      answer: 'La mayoría de las formaciones toman de 5 a 10 días hábiles según la entidad. Con servicio expedito podemos completarlo en 2–3 días hábiles tras recibir la documentación.'
    },
    {
      question: '¿Necesito viajar a Panamá?',
      answer: 'No. El proceso puede completarse de forma remota. Gestionamos firmas digitales cuando corresponda y presentamos todo ante las autoridades panameñas.'
    },
    {
      question: '¿Qué documentos se requieren?',
      answer: 'Generalmente: pasaportes de accionistas/directores, comprobante de domicilio reciente, estructura accionaria deseada y objeto social. Según el caso, pueden requerirse documentos adicionales.'
    },
    {
      question: '¿Cómo tributan las empresas en Panamá?',
      answer: 'Panamá aplica el principio de territorialidad: solo se grava el ingreso de fuente panameña. Aun así, hay obligaciones anuales de cumplimiento y mantenimiento.'
    }
  ];

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
<h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">Preguntas frecuentes</h2>
        <p className="text-center text-foreground/70 mb-8">Respuestas rápidas sobre formación de empresas en Panamá</p>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-lg bg-white border shadow-soft">
              <button type="button" onClick={() => toggle(idx)} className="w-full flex items-center justify-between p-4 text-left">
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                {activeIndex === idx ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
              {activeIndex === idx && (
                <div className="px-4 pb-4 text-foreground/80 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="mb-4">¿Aún tiene preguntas?</p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">Contáctenos</a>
        </div>
      </div>
    </section>
  );
};

export default FaqEs;
