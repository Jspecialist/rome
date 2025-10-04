import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavigationItem {
  key: string;
  href: string;
  localeAware?: boolean;
}

const navigation: NavigationItem[] = [
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "visa", href: "/visa", localeAware: true },
  { key: "attorneys", href: "#attorneys" },
  { key: "contact", href: "#contact" },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Compute locale-aware home path (e.g., '/', '/es/', '/it/')
  const lang = (i18n.language || 'en').split('-')[0];
  const homePath = lang && lang !== 'en' ? `/${lang}/` : '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={homePath} aria-label={t('header.logo')} className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">
            {t('header.logo')}
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const href = item.localeAware 
              ? (lang && lang !== 'en' ? `/${lang}${item.href}` : item.href)
              : item.href;
            return (
              <a
                key={item.key}
                href={href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors ease-smooth"
              >
                {t(`header.nav.${item.key}`)}
              </a>
            );
          })}
        </nav>

        {/* Contact & CTA */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a
            href="tel:+15551234567"
            className="hidden lg:flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors ease-smooth"
          >
            <Phone className="h-4 w-4 mr-2" />
            {t('header.phone')}
          </a>
          <Button variant="hero" className="hidden md:flex">
            {t('header.cta')}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <h2 className="text-xl font-serif font-semibold">Menu</h2>
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => {
                    const href = item.localeAware 
                      ? (lang && lang !== 'en' ? `/${lang}${item.href}` : item.href)
                      : item.href;
                    return (
                      <a
                        key={item.key}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-accent transition-colors ease-smooth"
                      >
                        {t(`header.nav.${item.key}`)}
                      </a>
                    );
                  })}
                </nav>
                <div className="flex flex-col space-y-4 pt-6 border-t">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center text-lg font-medium text-foreground hover:text-accent transition-colors ease-smooth"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    {t('header.phone')}
                  </a>
                  <Button variant="hero" size="lg" className="w-full">
                    {t('header.cta')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}