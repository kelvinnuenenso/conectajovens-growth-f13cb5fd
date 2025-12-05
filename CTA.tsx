import React from 'react';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black border-t border-white/10 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Comece a fazer parte da<br />
          <span className="text-brand-yellow">geração que cresce junto.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Não deixe mais um ano passar tentando descobrir tudo sozinho. Acelere seu processo agora.
        </p>
        <Button variant="primary" className="text-lg px-12 py-4">
          Quero Entrar Agora
        </Button>
        <p className="mt-6 text-xs text-gray-600 uppercase tracking-widest">
          Vagas limitadas para a turma atual
        </p>
      </div>
    </section>
  );
};

export default CTA;