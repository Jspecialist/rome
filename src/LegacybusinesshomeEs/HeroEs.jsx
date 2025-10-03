import React from 'react';

const HeroEs = () => {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Forme su empresa en minutos</h1>
        </div>

        {/* Cards de opciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* LLC */}
          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Sociedad de Responsabilidad Limitada (LLC)</h2>
            <p className="text-foreground/80 font-semibold mb-3">Desde $900 + tasas de registro</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              La opción más sencilla y flexible para proteger sus activos personales y estructurar su negocio eficientemente.
            </p>
            <a 
              href="#company-details" 
              className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm"
            >
              Crear mi LLC
            </a>
          </div>

          {/* Sociedad Anónima */}
          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Sociedad Anónima</h2>
            <p className="text-foreground/80 font-semibold mb-3">Desde $800 + tasas de registro</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Una estructura empresarial flexible que permite emisión de acciones, protección de activos y operaciones globales.
            </p>
            <a 
              href="#company-details" 
              className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm"
            >
              Crear mi Sociedad Anónima
            </a>
          </div>

          {/* Fundación Privada */}
          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Fundación de Interés Privado</h2>
            <p className="text-foreground/80 font-semibold mb-3">Desde $950 + tasas de registro</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Estructura diseñada para la protección patrimonial, planificación sucesoria y gestión de bienes familiares.
            </p>
            <a 
              href="#company-details" 
              className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm"
            >
              Crear mi Fundación Privada
            </a>
          </div>

          {/* Fundación Sin Fines de Lucro */}
          <div className="bg-white border rounded-sm shadow-soft p-6 flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-3">Fundación Sin Fines de Lucro</h2>
            <p className="text-foreground/80 font-semibold mb-3">Desde $750 + tasas de registro</p>
            <p className="text-foreground/70 text-sm mb-6 flex-grow">
              Estructura para organizaciones con propósito social o benéfico, elegible para exenciones fiscales.
            </p>
            <a 
              href="#company-details" 
              className="bg-accent hover:bg-accent-light text-accent-foreground py-3 px-4 text-center font-semibold transition-colors rounded-sm"
            >
              Crear mi Fundación Benéfica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEs;
