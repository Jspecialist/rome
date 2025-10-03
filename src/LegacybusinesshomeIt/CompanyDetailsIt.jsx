import React, { useState } from 'react';
import { Shield, Building2, Users, HandHeart, Lock, AlertCircle, Globe } from 'lucide-react';

const CompanyDetailsIt = () => {
  const [activeCompany, setActiveCompany] = useState('llc');

  const companyTypes = [
    { id: 'llc', icon: Shield, name: 'Società a Responsabilità Limitata (LLC)', shortDesc: 'Proteggi i tuoi beni con una struttura flessibile.' },
    { id: 'corporation', icon: Building2, name: 'Società Anonima (S.A)', shortDesc: 'Emetti azioni, opera globalmente e separa proprietà e gestione.' },
    { id: 'foundation', icon: Users, name: 'Fondazione di Interesse Privato', shortDesc: 'Gestione e protezione del patrimonio familiare con riservatezza.' },
    { id: 'nonprofit', icon: HandHeart, name: 'Fondazione Senza Scopo di Lucro', shortDesc: 'Massimizza l’impatto sociale con possibili benefici fiscali.' },
  ];

  const companyDetails = {
    llc: {
      title: 'Società a Responsabilità Limitata (LLC)',
      features: [
        { icon: Shield, title: 'Cosa la rende unica', items: [
          'Massima flessibilità gestionale e operativa',
          'Non richiede consiglio di amministrazione né riunioni formali',
          'Numero illimitato di soci',
          'Chiara separazione tra finanze personali e aziendali',
        ]},
        { icon: Lock, title: 'Tutele e fiscalità', items: [
          'Nessuna responsabilità personale per i debiti aziendali',
          'Possibilità di tassazione per trasparenza o societaria',
          'Solida protezione legale per i titolari',
        ]},
        { icon: AlertCircle, title: 'Considerazioni', items: [
          'Adempimenti e tasse annuali',
          'Le LLC non sono quotate in borsa',
          'In alcune giurisdizioni può essere tassata come società',
        ]},
      ],
      startingPrice: '$800',
      buttonText: 'Crea la mia LLC',
    },
    corporation: {
      title: 'Società Anonima (S.A)',
      features: [
        { icon: Building2, title: 'Cosa la rende unica', items: [
          'Consente emissione di azioni a fondatori e investitori',
          'Struttura preferita per crescita e scalabilità',
          'Separazione netta tra società e azionisti',
        ]},
        { icon: Globe, title: 'Portata globale e fiscalità', items: [
          'Forma societaria riconosciuta a livello internazionale',
          'Possibilità di operare in più giurisdizioni',
          'Potenziale quotazione in borsa',
        ]},
        { icon: AlertCircle, title: 'Considerazioni', items: [
          'Maggiori formalità e registrazioni',
          'Requisiti di conformità più stringenti',
          'Richiede consiglio di amministrazione e riunioni formali',
        ]},
      ],
      startingPrice: '$900',
      buttonText: 'Crea la mia S.A',
    },
    foundation: {
      title: 'Fondazione di Interesse Privato',
      features: [
        { icon: Users, title: 'Cosa la rende unica', items: [
          'Efficace protezione del patrimonio familiare',
          'Pianificazione successoria semplificata',
          'Maggiore riservatezza e privacy',
          'Gestione flessibile degli asset',
        ]},
        { icon: Lock, title: 'Gestione patrimoniale', items: [
          'Controllo delle distribuzioni ai beneficiari',
          'Continuità dopo il decesso del fondatore',
          'Protezione da creditori',
        ]},
        { icon: AlertCircle, title: 'Considerazioni', items: [
          'Regole specifiche su conferimenti e distribuzioni',
          'Richiede un consiglio fondazionale',
          'Costi di istituzione e mantenimento',
        ]},
      ],
      startingPrice: '$950',
      buttonText: 'Crea la mia Fondazione Privata',
    },
    nonprofit: {
      title: 'Fondazione Senza Scopo di Lucro',
      features: [
        { icon: HandHeart, title: 'Cosa la rende unica', items: [
          'Agevolazioni fiscali per attività benefiche',
          'Può ricevere donazioni deducibili',
          'Struttura legale orientata alla missione',
        ]},
        { icon: Users, title: 'Benefici sociali', items: [
          'Quadro legale per fini educativi, scientifici o caritativi',
          'Accesso a sovvenzioni e fondi pubblici',
          'Trasparenza per donatori e beneficiari',
        ]},
        { icon: AlertCircle, title: 'Considerazioni', items: [
          'Restrizioni sulla distribuzione degli utili',
          'Report periodici alle autorità',
          'Limitazioni nelle attività commerciali',
        ]},
      ],
      startingPrice: '$750',
      buttonText: 'Crea la mia Fondazione',
    },
  };

  const IconWrap = ({ Icon }) => (
    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </div>
  );

  return (
    <section id="company-details" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Dettagli dei tipi di società</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {companyTypes.map((company) => (
            <button
              type="button"
              key={company.id}
              onClick={() => setActiveCompany(company.id)}
              className={`text-left rounded-xl border p-4 shadow-soft hover:shadow-medium transition-shadow ${activeCompany === company.id ? 'bg-secondary/40 border-accent' : 'bg-white'}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <IconWrap Icon={company.icon} />
                <h3 className="font-semibold text-primary">{company.name}</h3>
              </div>
              <p className="text-sm text-foreground/70">{company.shortDesc}</p>
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-white border shadow-soft p-6">
          <h3 className="text-xl font-serif font-semibold text-primary mb-4">{companyDetails[activeCompany].title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {companyDetails[activeCompany].features.map((feature, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <IconWrap Icon={feature.icon} />
                  <span className="font-medium">{feature.title}</span>
                </div>
                <ul className="text-sm text-foreground/80 space-y-2 list-disc list-inside">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-foreground/80">Pronto per iniziare?</p>
              <p className="text-accent font-semibold">Da {companyDetails[activeCompany].startingPrice} + tasse</p>
            </div>
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">
              {companyDetails[activeCompany].buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailsIt;
