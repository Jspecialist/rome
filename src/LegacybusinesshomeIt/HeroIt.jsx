import React from 'react';

const HeroIt = () => {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Costituisci la tua società in pochi minuti</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Società a Responsabilità Limitata (LLC)</h2>
            <p className="text-foreground/80 font-semibold mb-3">Da $900 + tasse di registrazione</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              La scelta più semplice e flessibile per proteggere i beni personali e organizzare l'attività in modo efficiente.
            </p>
            <a href="#company-details" className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm">Crea la mia LLC</a>
          </div>

          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Società Anonima (S.A)</h2>
            <p className="text-foreground/80 font-semibold mb-3">Da $800 + tasse di registrazione</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Struttura societaria flessibile che consente emissione di azioni, protezione dei beni e operazioni globali.
            </p>
            <a href="#company-details" className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm">Crea la mia S.A</a>
          </div>

          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Fondazione di Interesse Privato</h2>
            <p className="text-foreground/80 font-semibold mb-3">Da $950 + tasse di registrazione</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Struttura per la protezione patrimoniale, la pianificazione successoria e la gestione dei beni familiari.
            </p>
            <a href="#company-details" className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm">Crea la mia Fondazione Privata</a>
          </div>

          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Fondazione Senza Scopo di Lucro</h2>
            <p className="text-foreground/80 font-semibold mb-3">Da $750 + tasse di registrazione</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Per organizzazioni con finalità sociali o benefiche, idonea a esenzioni fiscali.
            </p>
            <a href="#company-details" className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm">Crea la mia Fondazione</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIt;
