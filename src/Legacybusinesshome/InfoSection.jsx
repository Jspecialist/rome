import React from 'react';
import { Building2, Shield, Users, HandHeart, CheckCircle } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-10">
          All business types at a glance
        </h2>

        {/* Small cards row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-10">
          <div className="rounded-xl bg-white border shadow-soft p-5">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-primary">Corporation (S.A)</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Issue shares, operate globally, and separate ownership from management.
            </p>
          </div>
          <div className="rounded-xl bg-white border shadow-soft p-5">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-primary">Limited Liability Company (LLC)</h3>
            </div>
            <p className="text-sm text-foreground/70">Protect personal assets with a flexible, low-formality structure.</p>
          </div>
          <div className="rounded-xl bg-white border shadow-soft p-5">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-primary">Private Interest Foundation</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Family wealth protection, succession planning, and confidential management.
            </p>
          </div>
          <div className="rounded-xl bg-white border shadow-soft p-5">
            <div className="flex items-center gap-3 mb-2">
              <HandHeart className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-primary">Nonprofit/Public Foundation</h3>
            </div>
            <p className="text-sm text-foreground/70">Create a mission-driven organization with potential tax benefits.</p>
          </div>
        </div>

        {/* Why choose us */}
        <div className="max-w-6xl mx-auto rounded-xl bg-white border shadow-soft p-6">
          <h3 className="text-xl font-serif font-semibold text-primary mb-4 text-center">Why choose Esquivel &amp; Asociados to form your company?</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> 20+ years of formation experience in Panama</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Simplified, 100% online process</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Personalized legal guidance throughout</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Transparent fees with no hidden costs</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Real‑time status tracking</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5" /> Service in English and Spanish</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
