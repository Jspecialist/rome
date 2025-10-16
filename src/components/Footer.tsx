import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }, 
  { icon: Facebook, href: "#", label: "Facebook" }
];

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-6">{t('footer.company_name')}</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">{t('header.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">esquiyas@esquiyaslaw.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-accent" />
                <span className="text-sm" dangerouslySetInnerHTML={{__html: t('contact.contact_methods.address_details').replace('\n', '<br />')}} />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.legal_services')}</h4>
            <ul className="space-y-2">
              {t('footer.services', { returnObjects: true }).map((service: string, index: number) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {t('footer.resource_items', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.about')}</h4>
            <ul className="space-y-2">
              {t('footer.about_items', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="border-t border-primary-foreground/20 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              {t('footer.cta.title')}
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t('footer.cta.description')}
            </p>
            <Button variant="hero" size="lg">
              {t('footer.cta.button')}
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {t('footer.legal_links.privacy')}
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {t('footer.legal_links.terms')}
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {t('footer.legal_links.advertising')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}