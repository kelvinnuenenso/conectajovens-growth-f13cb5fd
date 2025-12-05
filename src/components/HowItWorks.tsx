import React from 'react';
import { motion } from 'framer-motion';
import { Network, Briefcase, Calendar, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Networking Estratégico",
    description: "Você entra em grupos segmentados por interesse e nível de experiência para garantir trocas valiosas.",
    icon: <Network size={32} />,
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10"
  },
  {
    title: "Oportunidades Reais",
    description: "Acesse um mural exclusivo de demandas, vagas, freelancers e chamadas para sócios.",
    icon: <Briefcase size={32} />,
    color: "text-brand-accent-green",
    bg: "bg-brand-accent-green/10"
  },
  {
    title: "Eventos & Mentorias",
    description: "Participe de masterminds, calls semanais e encontros presenciais para fortalecer laços.",
    icon: <Calendar size={32} />,
    color: "text-brand-accent-blue",
    bg: "bg-brand-accent-blue/10"
  },
  {
    title: "Crescimento Acelerado",
    description: "Esteja imerso em um ambiente que respira inovação, vendas e escala todos os dias.",
    icon: <Rocket size={32} />,
    color: "text-brand-accent-purple",
    bg: "bg-brand-accent-purple/10"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Como Funciona</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Um ecossistema desenhado para eliminar ruído e focar no que importa: resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-gray-dark border border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.bg} ${step.color} group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;