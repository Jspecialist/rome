import React from 'react';
import { Shield, Building2, Landmark, HandHeart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Kickstart your business in minutes</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">Choose the right structure and we’ll handle the paperwork—fast, secure, and compliant.</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* LLC */}
          <div className="group rounded-xl bg-white text-foreground border shadow-soft hover:shadow-strong transition-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-serif font-bold text-primary">Limited Liability Company (LLC)</h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Flexible management with personal liability protection.</p>
            <div className="flex gap-3">
              <a href="#company-details" className="px-4 py-2 rounded-lg border text-sm hover:bg-secondary/60 transition-colors">Learn more</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-light transition-colors">Get started</a>
            </div>
          </div>

          {/* S.A */}
          <div className="group rounded-xl bg-white text-foreground border shadow-soft hover:shadow-strong transition-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-serif font-bold text-primary">Sociedad Anónima (S.A)</h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Issue shares and scale with a globally recognized structure.</p>
            <div className="flex gap-3">
              <a href="#company-details" className="px-4 py-2 rounded-lg border text-sm hover:bg-secondary/60 transition-colors">Learn more</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-light transition-colors">Get started</a>
            </div>
          </div>

          {/* Trusts */}
          <div className="group rounded-xl bg-white text-foreground border shadow-soft hover:shadow-strong transition-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Landmark className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-serif font-bold text-primary">Trusts</h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Structured fiduciary management with strong privacy.</p>
            <div className="flex gap-3">
              <a href="#company-details" className="px-4 py-2 rounded-lg border text-sm hover:bg-secondary/60 transition-colors">Learn more</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-light transition-colors">Get started</a>
            </div>
          </div>

          {/* Foundations */}
          <div className="group rounded-xl bg-white text-foreground border shadow-soft hover:shadow-strong transition-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <HandHeart className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-serif font-bold text-primary">Foundations (Public or Private)</h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Wealth preservation, philanthropy, and succession planning.</p>
            <div className="flex gap-3">
              <a href="#company-details" className="px-4 py-2 rounded-lg border text-sm hover:bg-secondary/60 transition-colors">Learn more</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-light transition-colors">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
