import { Network, Lightbulb, Calendar, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Network,
      step: "01",
      title: "Networking Estratégico",
      description: "Acesse uma comunidade exclusiva de jovens profissionais. Faça conexões direcionadas e relevantes para seu nicho.",
      color: "primary",
    },
    {
      icon: Lightbulb,
      step: "02",
      title: "Oportunidades Reais",
      description: "Receba indicações de negócios, parcerias e colaborações diretamente de membros ativos da comunidade.",
      color: "neo-green",
    },
    {
      icon: Calendar,
      step: "03",
      title: "Eventos, Mentorias e Dinâmicas",
      description: "Participe de eventos online e presenciais, mentorias exclusivas e dinâmicas práticas de networking.",
      color: "deep-purple",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Ambiente de Crescimento",
      description: "Esteja cercado de pessoas que pensam grande e estão em constante evolução. Cresça junto.",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
      "neo-green": { bg: "bg-neo-green/10", text: "text-neo-green", border: "border-neo-green/30" },
      "deep-purple": { bg: "bg-deep-purple/10", text: "text-deep-purple", border: "border-deep-purple/30" },
      accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-card/30 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simples, Direto e{" "}
            <span className="text-primary">Eficiente</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Nossa metodologia foi criada para maximizar suas conexões e gerar resultados reais em tempo recorde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.title}
                className={`relative group bg-card border ${colors.border} rounded-3xl p-8 hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                    <item.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div>
                    <span className={`${colors.text} font-bold text-sm`}>{item.step}</span>
                    <h3 className="text-2xl font-bold mt-1 mb-3">{item.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
