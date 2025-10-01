import { CheckCircle, Star, Users, Building } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const { t } = useTranslation();
  
  const achievements = [
    { icon: Star, valueKey: "years", labelKey: "years_label" },
    { icon: Users, valueKey: "clients", labelKey: "clients_label" },
    { icon: CheckCircle, valueKey: "success", labelKey: "success_label" },
    { icon: Building, valueKey: "nationalities", labelKey: "nationalities_label" }
  ];
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{t(`about.achievements.${achievement.valueKey}`)}</div>
                      <div className="text-sm text-muted-foreground">{t(`about.achievements.${achievement.labelKey}`)}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t('about.credentials_title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t('about.credentials', { returnObjects: true }).map((credential: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src="/consultation-C8f7Rmrh.jpg"
                alt="Professional legal consultation"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 bg-card shadow-strong border-0">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{t('about.floating_card')}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('about.floating_card_desc')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-primary italic max-w-4xl mx-auto">
            "{t('about.quote')}"
          </blockquote>
          <cite className="block mt-6 text-lg text-muted-foreground">
            {t('about.quote_author')}
          </cite>
        </div>
      </div>
    </section>
  );
}