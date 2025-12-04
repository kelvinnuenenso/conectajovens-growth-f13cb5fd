import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Conexão",
      description: "Para quem está começando a construir sua rede.",
      price: "47",
      icon: Zap,
      features: [
        "Acesso à comunidade",
        "Networking básico",
        "Conteúdos exclusivos",
        "Dinâmicas mensais",
        "Suporte via grupo",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Profissional",
      description: "Para quem quer maximizar suas conexões.",
      price: "97",
      icon: Crown,
      features: [
        "Tudo do plano Conexão",
        "Networking avançado",
        "Mentorias em grupo",
        "Eventos exclusivos",
        "Indicações de parcerias",
        "Badge de membro Pro",
      ],
      popular: true,
      buttonVariant: "hero" as const,
    },
    {
      name: "Elite",
      description: "Para quem quer acesso total e prioridade.",
      price: "197",
      icon: Rocket,
      features: [
        "Tudo do plano Profissional",
        "Mentoria individual mensal",
        "Networking VIP",
        "Acesso antecipado",
        "Eventos presenciais",
        "Canal exclusivo Elite",
        "Destaque na comunidade",
      ],
      popular: false,
      buttonVariant: "premium" as const,
    },
  ];

  return (
    <section id="planos" className="py-24 lg:py-32 bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Escolha seu{" "}
            <span className="text-primary">nível de acesso</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Investimento acessível para resultados que transformam sua carreira.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary lg:scale-105 lg:-mt-4 lg:mb-4"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.popular ? "bg-primary" : "bg-primary/10"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              
              {/* Header */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 mb-6">{plan.description}</p>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-sm text-foreground/60">R$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-foreground/60">/mês</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button variant={plan.buttonVariant} className="w-full" size="lg">
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
