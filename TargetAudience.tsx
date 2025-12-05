import React from 'react';
import { motion } from 'framer-motion';

const targets = [
  {
    title: "Jovens Empreendedores",
    desc: "Que estão construindo startups, agências ou negócios digitais e precisam de sócios, fornecedores ou mentoria."
  },
  {
    title: "Criadores de Conteúdo",
    desc: "Que querem profissionalizar sua influência, fechar publicidades e colaborar com outras marcas."
  },
  {
    title: "Profissionais Ambiciosos",
    desc: "CLT ou Freelancers que querem acelerar a carreira, conseguir indicações e estar perto de quem decide."
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Para quem é?</h2>
          <p className="text-gray-500">Se você se encaixa em um destes perfis, seu lugar é aqui.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-gray-graphite p-8 rounded-3xl border border-transparent hover:border-brand-yellow/50 hover:bg-brand-gray-dark transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;