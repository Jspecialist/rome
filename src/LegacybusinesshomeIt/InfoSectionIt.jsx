import React from 'react';
import { Shield, Building2, Users, HandHeart } from 'lucide-react';

const InfoSectionIt = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Tutti i tipi di società a colpo d'occhio</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Società a Responsabilità Limitata (LLC)</h3>
            <p className="text-sm text-foreground/70 text-center">Proteggi i beni personali con una struttura flessibile e meno formalità rispetto alla S.A.</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Società Anonima</h3>
            <p className="text-sm text-foreground/70 text-center">Struttura che consente di emettere azioni, operare globalmente e proteggere i soci.</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Fondazione di Interesse Privato</h3>
            <p className="text-sm text-foreground/70 text-center">Gestione e tutela del patrimonio familiare con riservatezza.</p>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <HandHeart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Fondazione Senza Scopo di Lucro</h3>
            <p className="text-sm text-foreground/70 text-center">Per cause benefiche, educative o sociali, con possibili agevolazioni fiscali.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSectionIt;
