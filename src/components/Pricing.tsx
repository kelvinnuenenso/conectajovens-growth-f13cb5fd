import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const plans = [
  {
    name: "Plano Conexão",
    description: "Para quem quer começar a expandir sua rede.",
    price: "49,90",
    features: [
      "Acesso à comunidade geral",
      "Mural de oportunidades básico",
      "Conteúdos gravados",
      "Suporte via e-mail"
    ],
    cta: "Começar Agora",
    popular: false,
    variant: "outline"
  },
  {
    name: "Plano Profissional",
    description: "O mais escolhido por quem quer resultados rápidos.",
    price: "97,00",
    features: [
      "Tudo do Plano Conexão",
      "Acesso a grupos segmentados",
      "Calls de networking quinzenais",
      "Descontos em parceiros",
      "Selos de verificação"
    ],
    cta: "Assinar Profissional",
    popular: true,
    variant: "primary"
  },
  {
    name: "Plano Elite",
    description: "Acompanhamento próximo e acesso total.",
    price: "197,00",
    features: [
      "Tudo do Plano Profissional",
      "Mastermind mensal exclusivo",
      "Análise de perfil/negócio",
      "Grupo VIP de WhatsApp",
      "Acesso direto aos fundadores"
    ],
    cta: "Aplicar para Elite",
    popular: false,
    variant: "outline"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha seu Plano</h2>
          <p className="text-gray-400">Investimento acessível para um retorno incalculável.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 border ${
                plan.popular 
                  ? 'bg-brand-gray-dark border-brand-yellow transform md:-translate-y-4 shadow-2xl shadow-brand-yellow/10' 
                  : 'bg-transparent border-white/10 hover:border-white/20'
              } transition-all duration-300 flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-sm text-gray-400 mr-2">R$</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-brand-yellow mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline' as any} 
                fullWidth
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;