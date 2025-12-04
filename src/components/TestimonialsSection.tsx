import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas Ferreira",
      role: "Fundador da TechStart",
      content: "Em menos de 3 meses na comunidade, fechei 2 parcerias que mudaram completamente o rumo do meu negócio. O networking aqui é de outro nível.",
      avatar: "LF",
    },
    {
      name: "Mariana Costa",
      role: "Criadora de Conteúdo",
      content: "Encontrei meus melhores parceiros de collab aqui. A qualidade das conexões é impressionante. Recomendo para qualquer criador que quer crescer.",
      avatar: "MC",
    },
    {
      name: "Rafael Oliveira",
      role: "Product Manager",
      content: "A Jovens de Networking me ajudou a encontrar minha próxima oportunidade profissional. As dinâmicas e o networking estratégico realmente funcionam.",
      avatar: "RO",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos membros{" "}
            <span className="text-primary">dizem</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Resultados reais de pessoas reais que estão transformando suas carreiras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
