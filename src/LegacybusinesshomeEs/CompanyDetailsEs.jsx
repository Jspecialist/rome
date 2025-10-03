import React, { useState } from 'react';
import { Shield, Building2, Users, HandHeart, Lock, AlertCircle, Globe } from 'lucide-react';

const CompanyDetailsEs = () => {
  const [activeCompany, setActiveCompany] = useState('llc');

  const companyTypes = [
    { id: 'llc', icon: Shield, name: 'Sociedad de Responsabilidad Limitada (LLC)', shortDesc: 'Proteja sus activos personales con una estructura flexible.' },
    { id: 'corporation', icon: Building2, name: 'Sociedad Anónima (S.A)', shortDesc: 'Emita acciones, opere globalmente y separe propiedad de gestión.' },
    { id: 'foundation', icon: Users, name: 'Fundación de Interés Privado', shortDesc: 'Gestione y proteja patrimonios familiares con confidencialidad.' },
    { id: 'nonprofit', icon: HandHeart, name: 'Fundación Pública / Sin Fines de Lucro', shortDesc: 'Impulsa impacto social con posibles beneficios fiscales.' },
  ];

  const companyDetails = {
    llc: {
      title: 'Sociedad de Responsabilidad Limitada (LLC)',
      features: [
        { icon: Shield, title: 'Qué la hace única', items: [
          'Máxima flexibilidad en gestión y operación',
          'No requiere junta directiva ni reuniones formales',
          'Número ilimitado de miembros',
          'Separación clara entre finanzas personales y del negocio',
        ]},
        { icon: Lock, title: 'Protecciones y fiscalidad', items: [
          'No responde personalmente por deudas del negocio',
          'Puede elegir entre tributación de traspaso o corporativa',
          'Sólida protección legal para los propietarios',
        ]},
        { icon: AlertCircle, title: 'Consideraciones', items: [
          'Presentaciones y tasas anuales de cumplimiento',
          'Las LLC no cotizan en bolsa',
          'En algunos países puede tributarse como corporación',
        ]},
      ],
      startingPrice: '$800',
      buttonText: 'Crear mi LLC',
    },
    corporation: {
      title: 'Sociedad Anónima (S.A)',
      features: [
        { icon: Building2, title: 'Qué la hace única', items: [
          'Permite emitir acciones a fundadores e inversores',
          'Estructura preferida para crecimiento y escalamiento',
          'Separación clara entre sociedad y accionistas',
        ]},
        { icon: Globe, title: 'Alcance global y fiscalidad', items: [
          'Forma corporativa reconocida internacionalmente',
          'Posibilidad de operar en múltiples jurisdicciones',
          'Potencial para listar acciones en bolsas',
        ]},
        { icon: AlertCircle, title: 'Consideraciones', items: [
          'Más formalidades y registros administrativos',
          'Requisitos de cumplimiento más estrictos',
          'Requiere junta directiva y reuniones formales',
        ]},
      ],
      startingPrice: '$900',
      buttonText: 'Crear mi Sociedad Anónima',
    },
    foundation: {
      title: 'Fundación de Interés Privado',
      features: [
        { icon: Users, title: 'Qué la hace única', items: [
          'Protección efectiva del patrimonio familiar',
          'Planificación sucesoria simplificada',
          'Mayor confidencialidad y privacidad',
          'Gestión flexible de activos',
        ]},
        { icon: Lock, title: 'Administración patrimonial', items: [
          'Control de las distribuciones a beneficiarios',
          'Continuidad tras el fallecimiento del fundador',
          'Protección frente a reclamos de acreedores',
        ]},
        { icon: AlertCircle, title: 'Consideraciones', items: [
          'Reglas específicas sobre aportes y distribuciones',
          'Requiere consejo fundacional',
          'Costos de establecimiento y mantenimiento',
        ]},
      ],
      startingPrice: '$950',
      buttonText: 'Crear mi Fundación Privada',
    },
    nonprofit: {
      title: 'Fundación Pública / Sin Fines de Lucro',
      features: [
        { icon: HandHeart, title: 'Qué la hace única', items: [
          'Beneficios fiscales para actividades benéficas',
          'Puede recibir donaciones deducibles',
          'Estructura legal orientada a una misión',
        ]},
        { icon: Users, title: 'Beneficios sociales', items: [
          'Marco legal para fines educativos, científicos o caritativos',
          'Posibilidad de acceder a subvenciones y fondos públicos',
          'Transparencia para donantes y beneficiarios',
        ]},
        { icon: AlertCircle, title: 'Consideraciones', items: [
          'Restricciones en la distribución de excedentes',
          'Reportes regulares a autoridades',
          'Limitaciones en actividades comerciales',
        ]},
      ],
      startingPrice: '$750',
      buttonText: 'Crear mi Fundación',
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
<h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Todos los tipos de empresas de un vistazo</h2>

        {/* Selector */}
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

        {/* Detalle */}
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
              <p className="text-sm text-foreground/80">¿Listo para comenzar?</p>
              <p className="text-accent font-semibold">Desde {companyDetails[activeCompany].startingPrice} + tasas</p>
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

export default CompanyDetailsEs;
