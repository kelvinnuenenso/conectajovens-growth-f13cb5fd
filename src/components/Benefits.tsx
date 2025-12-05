import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefitsList = [
  "Conexões profissionais qualificadas",
  "Acesso a criadores e especialistas",
  "Troca de serviços e parcerias",
  "Dinâmicas guiadas de networking",
  "Conteúdos e workshops exclusivos",
  "Comunidade ativa com suporte diário",
  "Acesso antecipado a oportunidades",
  "Descontos em ferramentas parceiras"
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-gray-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por que fazer parte?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              O ambiente vence a força de vontade. Ao entrar para a Jovens de Networking, você para de jogar sozinho e entra para um time de alta performance.
            </p>
            <div className="h-2 w-24 bg-brand-yellow rounded-full"></div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsList.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <CheckCircle2 className="text-brand-yellow flex-shrink-0" size={24} />
                  <span className="text-gray-200 font-medium text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;