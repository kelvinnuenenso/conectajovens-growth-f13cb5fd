import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-brand-black overflow-hidden pt-20">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-accent-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent-green animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Nova turma aberta para 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Conectamos Jovens que Querem
          <span className="text-brand-yellow block mt-2">Crescer Mais Rápido</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-10 font-light"
        >
          Networking estratégico, oportunidades reais e crescimento profissional acelerado. 
          O ecossistema definitivo para quem não quer perder tempo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" className="group">
            Entrar para a Comunidade
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary">
            Conhecer Mais
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/5 w-full max-w-4xl"
        >
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">Empresas e projetos dos nossos membros</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple placeholders for Logos */}
             <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center text-xs font-bold text-gray-400">STARTUP</div>
             <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center text-xs font-bold text-gray-400">AGÊNCIA</div>
             <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center text-xs font-bold text-gray-400">FINTECH</div>
             <div className="h-8 w-24 bg-gray-700/50 rounded flex items-center justify-center text-xs font-bold text-gray-400">STUDIO</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;