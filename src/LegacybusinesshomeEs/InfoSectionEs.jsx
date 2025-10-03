import React from 'react';
import { Shield, Building2, Users, HandHeart } from 'lucide-react';

const InfoSectionEs = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Todos los tipos de empresas de un vistazo</h2>

        {/* Tarjetas de tipos de empresas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Sociedad de Responsabilidad Limitada (LLC)</h3>
            <p className="text-sm text-foreground/70 text-center">Proteja sus activos personales mientras opera su negocio con una estructura flexible y menos formalidades que una sociedad anónima.</p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Sociedad Anónima</h3>
            <p className="text-sm text-foreground/70 text-center">Estructura corporativa que permite emitir acciones, operar globalmente y proteger activos personales. Ideal para empresas con múltiples accionistas.</p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Fundación de Interés Privado</h3>
            <p className="text-sm text-foreground/70 text-center">Ideal para la gestión y protección de patrimonios familiares, planificación sucesoria y administración de activos con confidencialidad.</p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 hover:shadow-medium transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <HandHeart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-bold text-center text-primary mb-2">Fundación Sin Fines de Lucro</h3>
            <p className="text-sm text-foreground/70 text-center">Cree una organización dedicada a causas benéficas, educativas o sociales, con beneficios fiscales para sus donantes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSectionEs;
