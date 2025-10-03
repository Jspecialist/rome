import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqIt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Qual è la differenza tra S.A e LLC?',
      answer: 'La S.A consente di emettere azioni e richiede una governance più formale—ideale per crescere e attrarre investimenti. La LLC offre gestione flessibile e meno formalità, con protezione dei beni personali.'
    },
    {
      question: 'Quanto tempo serve per costituire una società a Panama?',
      answer: 'La maggior parte delle costituzioni richiede 5–10 giorni lavorativi secondo il tipo di ente. Con il servizio rapido possiamo completare in 2–3 giorni dopo aver ricevuto la documentazione.'
    },
    {
      question: 'Devo viaggiare a Panama?',
      answer: 'No. Il processo può essere completato da remoto. Gestiamo firme digitali quando possibile e presentiamo tutto alle autorità panamensi.'
    },
    {
      question: 'Quali documenti sono necessari?',
      answer: 'Generalmente: passaporti di soci/direttori, prova di domicilio recente, struttura azionaria desiderata e oggetto sociale. In base al caso possono servire altri documenti.'
    },
    {
      question: 'Come sono tassate le società a Panama?',
      answer: 'Panama applica il principio della territorialità: si tassa solo il reddito di fonte panamense. Restano comunque obblighi annuali di conformità e mantenimento.'
    }
  ];

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">Domande frequenti</h2>
        <p className="text-center text-foreground/70 mb-8">Risposte rapide sulla costituzione societaria a Panama</p>
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
          <p className="mb-4">Hai ancora domande?</p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">Contattaci</a>
        </div>
      </div>
    </section>
  );
};

export default FaqIt;
