import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the difference between an S.A and an LLC?',
      answer: 'An S.A (Sociedad Anónima) can issue shares and follows more formal corporate governance—great for growth and investment. An LLC offers flexible management and simpler compliance while still protecting personal assets.'
    },
    {
      question: 'How long does it take to form a company in Panama?',
      answer: 'Most formations take 5–10 business days depending on the entity and structure. With our expedited service, we can complete it in 2–3 business days after receiving all documentation.'
    },
    {
      question: 'Do I need to travel to Panama?',
      answer: 'No. The entire process can be completed remotely. We handle filings, digital signatures when needed, and submissions to Panamanian authorities on your behalf.'
    },
    {
      question: 'What documents are required?',
      answer: 'Typically: passport copies for shareholders/directors, recent proof of address, desired share structure, and business purpose. Additional documents may be required depending on the entity.'
    },
    {
      question: 'What are the tax requirements?',
      answer: 'Panama taxes territorial income only. Foreign‑source income is generally not taxed in Panama, though annual compliance and maintenance fees apply.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-3">Frequently asked questions</h2>
        <p className="text-center text-foreground/70 mb-8">Quick answers about Panama business formation</p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div className="rounded-lg bg-white border shadow-soft" key={index}>
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                {activeIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-foreground/80 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="mb-4">Still have questions?</p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
