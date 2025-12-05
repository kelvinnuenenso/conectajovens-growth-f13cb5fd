import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: <Lightbulb size={40} />,
    title: "Empreendedores",
    description: "Donos de negócios que querem escalar, encontrar parceiros e acessar novas oportunidades de mercado.",
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10"
  },
  {
    icon: <Palette size={40} />,
    title: "Criadores de Conteúdo",
    description: "Influenciadores, designers, copywriters e criativos que buscam collabs e visibilidade.",
    color: "text-brand-accent-green",
    bg: "bg-brand-accent-green/10"
  },
  {
    icon: <Briefcase size={40} />,
    title: "Profissionais CLT",
    description: "Quem quer crescer na carreira, mudar de área ou empreender no futuro com segurança.",
    color: "text-brand-accent-blue",
    bg: "bg-brand-accent-blue/10"
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Para Quem É</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Se você se encaixa em algum desses perfis, a Jovens de Networking foi feita para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-gray-dark border border-white/5 p-8 rounded-3xl text-center hover:border-brand-yellow/30 transition-colors"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto ${audience.bg} ${audience.color}`}>
                {audience.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
              <p className="text-gray-400 leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;