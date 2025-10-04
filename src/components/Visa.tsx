import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckIcon, BriefcaseIcon, TrendingUpIcon, HomeIcon, UsersIcon, GlobeIcon, PlaneIcon, AwardIcon, MapIcon, HandshakeIcon, HeadphonesIcon } from 'lucide-react';

interface VisaFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const VisaCard: React.FC<VisaFeatureProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
              <CheckIcon className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Visa: React.FC = () => {
  const { t } = useTranslation();

  const visaPrograms = [
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: t('visa.programs.work_visa.title'),
      description: t('visa.programs.work_visa.description'),
      features: t('visa.programs.work_visa.features', { returnObjects: true }) as string[]
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8" />,
      title: t('visa.programs.investor_visa.title'),
      description: t('visa.programs.investor_visa.description'),
      features: t('visa.programs.investor_visa.features', { returnObjects: true }) as string[]
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: t('visa.programs.retirement_visa.title'),
      description: t('visa.programs.retirement_visa.description'),
      features: t('visa.programs.retirement_visa.features', { returnObjects: true }) as string[]
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: t('visa.programs.family_visa.title'),
      description: t('visa.programs.family_visa.description'),
      features: t('visa.programs.family_visa.features', { returnObjects: true }) as string[]
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: t('visa.programs.friendly_nations.title'),
      description: t('visa.programs.friendly_nations.description'),
      features: t('visa.programs.friendly_nations.features', { returnObjects: true }) as string[]
    },
    {
      icon: <PlaneIcon className="w-8 h-8" />,
      title: t('visa.programs.tourist_extension.title'),
      description: t('visa.programs.tourist_extension.description'),
      features: t('visa.programs.tourist_extension.features', { returnObjects: true }) as string[]
    }
  ];

  const benefits = [
    {
      icon: <AwardIcon className="w-8 h-8" />,
      title: t('visa.why_choose.benefits.0.title'),
      description: t('visa.why_choose.benefits.0.description')
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      title: t('visa.why_choose.benefits.1.title'),
      description: t('visa.why_choose.benefits.1.description')
    },
    {
      icon: <HandshakeIcon className="w-8 h-8" />,
      title: t('visa.why_choose.benefits.2.title'),
      description: t('visa.why_choose.benefits.2.description')
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: t('visa.why_choose.benefits.3.title'),
      description: t('visa.why_choose.benefits.3.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('visa.hero.title')} <br />
              <span className="text-orange-400">{t('visa.hero.subtitle')}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t('visa.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('visa.hero.cta_assessment')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                {t('visa.hero.cta_requirements')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Programs Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('visa.programs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('visa.programs.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaPrograms.map((program, index) => (
              <VisaCard
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
                features={program.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('visa.process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('visa.process.description')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {t('visa.process.steps', { returnObjects: true }).map((step: any, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('visa.why_choose.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('visa.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t('visa.cta.description')}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
            {t('visa.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Visa;