import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que é', href: '#about' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Planos', href: '#pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center transform rotate-3">
              <Zap size={20} className="text-brand-black" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Jovens de <span className="text-brand-yellow">Networking</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-yellow text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="py-2 px-6 text-sm">
              Entrar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-gray-dark border-b border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-brand-yellow hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>
                Entrar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;