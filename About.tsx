import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Handshake, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-brand-yellow font-bold uppercase tracking-wider text-sm mb-2">Sobre Nós</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Não é apenas um grupo.<br />
              É um <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-accent-gold">acelerador de carreiras.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A <strong>Jovens de Networking</strong> nasceu da necessidade de conectar pessoas ambiciosas que sentiam falta de um ambiente de alto nível para trocar experiências.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Somos uma comunidade que conecta jovens empreendedores, criadores e profissionais para gerar networking inteligente, parcerias reais e crescimento acelerado. Aqui, o foco é o resultado prático: negócios fechados, colabs lançadas e indicações valiosas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <h3 className="text-2xl font-bold text-brand-yellow mb-1">+500</h3>
                    <p className="text-sm text-gray-400">Membros Ativos</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <h3 className="text-2xl font-bold text-brand-yellow mb-1">R$ 2M+</h3>
                    <p className="text-sm text-gray-400">Negócios Gerados</p>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8 sm:mt-0">
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors">
                    <Users className="text-brand-yellow mb-4" size={32} />
                    <h3 className="text-white font-semibold text-xl mb-2">Networking Inteligente</h3>
                    <p className="text-gray-400 text-sm">Conexões curadas para garantir relevância e qualidade.</p>
                </div>
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors">
                    <Handshake className="text-brand-accent-green mb-4" size={32} />
                    <h3 className="text-white font-semibold text-xl mb-2">Parcerias Reais</h3>
                    <p className="text-gray-400 text-sm">Ambiente propício para fechar contratos e sociedades.</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors">
                    <TrendingUp className="text-brand-accent-purple mb-4" size={32} />
                    <h3 className="text-white font-semibold text-xl mb-2">Crescimento Acelerado</h3>
                    <p className="text-gray-400 text-sm">Aprenda com quem já chegou onde você quer ir.</p>
                </div>
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors">
                    <Target className="text-brand-accent-blue mb-4" size={32} />
                    <h3 className="text-white font-semibold text-xl mb-2">Oportunidades</h3>
                    <p className="text-gray-400 text-sm">Acesso exclusivo a vagas, projetos e demandas.</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;