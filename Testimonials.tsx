import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Fundador de SaaS",
    text: "Entrei buscando um designer e saí com um sócio. O nível das pessoas aqui é surreal. Em 3 meses, dobrei meu faturamento apenas aplicando o que aprendi nas calls.",
    img: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Mariana Costa",
    role: "Gestora de Tráfego",
    text: "O networking aqui não é forçado. Consegui 3 clientes grandes apenas participando ativamente das discussões no grupo. O investimento se pagou na primeira semana.",
    img: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Pedro Alencar",
    role: "Copywriter Senior",
    text: "Já participei de vários masterminds caros, mas a energia da Jovens de Networking é diferente. Todo mundo quer crescer e ajudar. É um ambiente de pura aceleração.",
    img: "https://picsum.photos/100/100?random=3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          O que dizem os membros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-black p-8 rounded-2xl relative">
              <div className="flex text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{item.text}"</p>
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-gray-graphite" />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-brand-yellow text-xs uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;