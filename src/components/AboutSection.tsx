import { Users, Handshake, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Networking Inteligente",
      description: "Conecte-se com pessoas que realmente podem impactar sua jornada.",
    },
    {
      icon: Handshake,
      title: "Parcerias Reais",
      description: "Encontre sócios, colaboradores e parceiros de negócios.",
    },
    {
      icon: Rocket,
      title: "Crescimento Acelerado",
      description: "Aprenda e cresça com quem já está no caminho do sucesso.",
    },
    {
      icon: Target,
      title: "Oportunidades Concretas",
      description: "Acesse negócios, collabs, indicações e projetos exclusivos.",
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O que é a{" "}
            <span className="text-primary">Jovens de Networking</span>?
          </h2>
          <p className="text-lg text-foreground/70">
            Somos uma comunidade exclusiva que conecta jovens empreendedores, criadores de conteúdo 
            e profissionais ambiciosos. Nosso objetivo é simples: gerar conexões que transformam carreiras 
            e criam oportunidades reais de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
