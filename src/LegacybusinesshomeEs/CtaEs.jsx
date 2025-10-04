import React from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const CtaEs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-hero rounded-xl p-8 text-primary-foreground grid lg:grid-cols-2 gap-8 items-center shadow-medium">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Forme su empresa en Panamá hoy</h2>
            <p className="text-primary-foreground/90 mb-6">Nuestros expertos le guiarán a través de todo el proceso, de manera rápida y sin complicaciones</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /><span>Proceso 100% en línea</span></div>
              <div className="flex items-center gap-2"><Shield className="h-5 w-5" /><span>Confidencialidad garantizada</span></div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>Formación en menos de 10 días</span></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent-light transition-colors">Comenzar ahora</a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Reservar consulta gratuita</a>
            </div>
          </div>
          <div className="rounded-lg bg-white/5 p-6 border border-white/10">
            <div className="text-sm uppercase tracking-wide mb-3 opacity-80">Confianza de</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-12 rounded bg-white/10"></div>
              <div className="h-12 rounded bg-white/10"></div>
              <div className="h-12 rounded bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaEs;
