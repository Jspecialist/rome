import React from 'react';
import { CheckCircle } from 'lucide-react';

const CtaEs = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Forme su empresa en Panamá <span className="underline">hoy mismo</span></h2>
          <p className="text-primary-foreground/90 text-center mb-8">Nuestros expertos le guiarán a través de todo el proceso, de manera rápida y sin complicaciones</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Proceso 100% en línea</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Confidencialidad garantizada</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
              <p>Formación en menos de 10 días</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#contact" className="bg-accent text-accent-foreground px-8 py-3 font-semibold hover:bg-accent-light transition-colors rounded-lg">Iniciar mi empresa ahora</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaEs;
