import React, { useState } from 'react';
import { Shield, Building2, Users, HandHeart, Lock, AlertCircle, Globe } from 'lucide-react';

const CompanyDetails = () => {
  const [activeCompany, setActiveCompany] = useState('llc');

  const companyTypes = [
    {
      id: 'llc',
      icon: Shield,
      name: 'Limited Liability Company (LLC)',
      shortDesc: 'Protect personal assets while operating with a flexible structure.'
    },
    {
      id: 'corporation',
      icon: Building2,
      name: 'Sociedad Anónima (S.A)',
      shortDesc: 'Issue shares, operate globally, and separate ownership from management.'
    },
    {
      id: 'foundation',
      icon: Users,
      name: 'Private Interest Foundation',
      shortDesc: 'Manage and protect family wealth with confidentiality.'
    },
    {
      id: 'nonprofit',
      icon: HandHeart,
      name: 'Nonprofit/Public Foundation',
      shortDesc: 'Pursue social impact with potential tax benefits.'
    }
  ];

  const companyDetails = {
    llc: {
      title: 'Limited Liability Company (LLC)',
      features: [
        {
          icon: Shield,
          title: "How it's unique",
          items: [
            'Maximum flexibility in management and operations',
            'No board requirement or formal meetings',
            'Unlimited members allowed',
            'Clear separation of personal and business finances'
          ]
        },
        {
          icon: Lock,
          title: 'Protections & taxation',
          items: [
            "You're not personally on the hook for business liabilities",
            'Choose pass‑through or corporate taxation',
            'Robust legal protection for owners'
          ]
        },
        {
          icon: AlertCircle,
          title: 'Considerations',
          items: [
            'Annual filings and fees to stay compliant',
            "LLCs can't go public",
            'May be taxed as a corporation in other countries'
          ]
        }
      ],
      startingPrice: '$800',
      buttonText: 'Start my LLC'
    },
    corporation: {
      title: 'Sociedad Anónima (S.A)',
      features: [
        {
          icon: Building2,
          title: "How it's unique",
          items: [
            'Ability to issue shares to founders and investors',
            'Preferred by investors for growth and scale',
            'Clear separation between company and shareholders'
          ]
        },
        {
          icon: Globe,
          title: 'Global reach & taxation',
          items: [
            'Internationally recognized corporate form',
            'Operate in multiple jurisdictions',
            'Potential to list shares on exchanges'
          ]
        },
        {
          icon: AlertCircle,
          title: 'Considerations',
          items: [
            'More administrative formalities and record‑keeping',
            'Stricter compliance requirements',
            'Board of directors and formal meetings required'
          ]
        }
      ],
      startingPrice: '$900',
      buttonText: 'Start my corporation'
    },
    foundation: {
      title: 'Private Interest Foundation',
      features: [
        {
          icon: Users,
          title: "How it's unique",
          items: [
            'Effective protection of family wealth',
            'Simplified succession planning',
            'Enhanced confidentiality and privacy',
            'Flexible asset management'
          ]
        },
        {
          icon: Lock,
          title: 'Wealth administration',
          items: [
            'Control distributions to beneficiaries',
            'Continuity after death of the founder',
            'Protection from creditor claims'
          ]
        },
        {
          icon: AlertCircle,
          title: 'Considerations',
          items: [
            'Specific rules on contributions and distributions',
            'Foundation council required',
            'Establishment and maintenance costs'
          ]
        }
      ],
      startingPrice: '$950',
      buttonText: 'Create my Private Foundation'
    },
    nonprofit: {
      title: 'Nonprofit/Public Foundation',
      features: [
        {
          icon: HandHeart,
          title: "How it's unique",
          items: [
            'Tax benefits for charitable operations',
            'Can receive tax‑deductible donations',
            'Mission‑driven legal structure'
          ]
        },
        {
          icon: Users,
          title: 'Social benefits',
          items: [
            'Legal framework for educational, scientific or charitable work',
            'Eligibility for grants and public funding',
            'Transparent structure for donors and beneficiaries'
          ]
        },
        {
          icon: AlertCircle,
          title: 'Considerations',
          items: [
            'Restrictions on distribution of profits',
            'Regular reporting to authorities',
            'Limitations on commercial activities'
          ]
        }
      ],
      startingPrice: '$750',
      buttonText: 'Start my nonprofit'
    }
  };

  const IconWrap = ({Icon}) => (
    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </div>
  );

  return (
<section id="company-details" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-8">All business types at a glance</h2>

        {/* Selector cards */}
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

        {/* Details */}
        <div className="rounded-xl bg-white border shadow-soft p-6">
          {companyDetails[activeCompany] && (
            <>
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
                  <p className="text-sm text-foreground/80">Ready to get started?</p>
                  <p className="text-accent font-semibold">Starts at {companyDetails[activeCompany].startingPrice} + filing fees</p>
                </div>
                <a href="#contact" className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">
                  {companyDetails[activeCompany].buttonText}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
