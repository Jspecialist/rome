import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();
  
  const getLocalizedHref = (path: string) => {
    if (typeof window === 'undefined') return path;
    const p = window.location.pathname;
    if (p.startsWith('/es')) return `/es${path === '/' ? '' : path}`;
    if (p.startsWith('/it')) return `/it${path === '/' ? '' : path}`;
    return path;
  };
  
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bglawyers.jpg"
          alt="Professional legal team"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Trust Banner */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Shield className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm text-accent-light font-medium">
              {t('hero.trust_banner')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.headline')}{" "}
            <span className="text-accent">{t('hero.headline_accent')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl leading-relaxed">
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href={getLocalizedHref('/business-formation')} aria-label="Go to Business Formation test page">
                {t('hero.cta_business')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              {t('hero.cta_citizenship')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div className="flex items-center text-primary-foreground/90">
              <Award className="h-8 w-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">{t('hero.stats.years')}</div>
                <div className="text-sm opacity-80">{t('hero.stats.years_desc')}</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground/90">
              <Users className="h-8 w-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">{t('hero.stats.clients')}</div>
                <div className="text-sm opacity-80">{t('hero.stats.clients_desc')}</div>
              </div>
            </div>
            <div className="flex items-center text-primary-foreground/90">
              <Shield className="h-8 w-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <div className="font-semibold text-lg">{t('hero.stats.success')}</div>
                <div className="text-sm opacity-80">{t('hero.stats.success_desc')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}