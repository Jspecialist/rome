import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Phone,
      titleKey: "phone",
      details: t('header.phone'),
      descKey: "phone_desc"
    },
    {
      icon: Mail,
      titleKey: "email", 
      details: "contact@elitelegalpartners.com",
      descKey: "email_desc"
    },
    {
      icon: MapPin,
      titleKey: "address",
      details: t('contact.contact_methods.address_details'),
      descKey: "address_desc"
    },
    {
      icon: Clock,
      titleKey: "hours",
      details: t('contact.contact_methods.hours_details'),
      descKey: "hours_desc"
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-strong border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                {t('contact.form_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      {t('contact.form.first_name')}
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder={t('contact.form.first_name_placeholder')}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      {t('contact.form.last_name')}
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder={t('contact.form.last_name_placeholder')}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t('contact.form.email')}
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('contact.form.email_placeholder')}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {t('contact.form.phone')}
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={t('contact.form.phone_placeholder')}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="legalMatter" className="text-sm font-medium text-foreground">
                    {t('contact.form.legal_matter')}
                  </Label>
                  <Input 
                    id="legalMatter" 
                    placeholder={t('contact.form.legal_matter_placeholder')}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t('contact.form.message')}
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.message_placeholder')}
                    rows={4}
                    className="mt-2"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  {t('contact.form.submit')}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  {t('contact.form.required_note')}
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {t('contact.info_title')}
              </h3>
              <p className="text-muted-foreground">
                {t('contact.info_description')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{t(`contact.contact_methods.${info.titleKey}`)}</h4>
                          <p className="text-foreground font-medium whitespace-pre-line mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {t(`contact.contact_methods.${info.descKey}`)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-accent/5 border-accent/20 shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold text-accent mb-2">{t('contact.emergency.title')}</h4>
                <p className="text-sm text-foreground mb-3">
                  {t('contact.emergency.description')}
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  {t('contact.emergency.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}