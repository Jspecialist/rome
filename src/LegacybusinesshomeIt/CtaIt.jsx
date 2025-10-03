import React from 'react';
import { CheckCircle } from 'lucide-react';

const CtaIt = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Costituisci la tua società in Panama <span className="underline">oggi stesso</span></h2>
          <p className="text-primary-foreground/90 text-center mb-8">I nostri esperti ti guideranno in ogni fase, in modo rapido e senza complicazioni</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Processo 100% online</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Riservatezza garantita</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Costituzione in meno di 10 giorni</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#contact" className="bg-accent text-accent-foreground px-8 py-3 font-semibold hover:bg-accent-light transition-colors rounded-lg">Inizia ora</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaIt;
