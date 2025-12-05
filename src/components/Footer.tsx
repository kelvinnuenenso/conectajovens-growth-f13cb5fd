import React from 'react';
import { Zap, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray-dark py-16 border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-yellow rounded-md flex items-center justify-center">
                <Zap size={14} className="text-brand-black" />
              </div>
              <span className="font-bold text-lg text-white">
                Jovens de <span className="text-brand-yellow">Networking</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              A maior comunidade de aceleração profissional para jovens do Brasil. Conecte-se, aprenda e cresça.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contato</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jovens de Networking. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Feito com <span className="text-brand-yellow">⚡</span> para o futuro.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;