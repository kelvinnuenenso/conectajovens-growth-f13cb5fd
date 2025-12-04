import { 
  Users, Award, RefreshCw, Compass, 
  BookOpen, MessageCircle, Clock, Star 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Conexões Profissionais Qualificadas",
      description: "Networking com pessoas selecionadas e ambiciosas.",
    },
    {
      icon: Award,
      title: "Acesso a Especialistas",
      description: "Criadores, empreendedores e profissionais de destaque.",
    },
    {
      icon: RefreshCw,
      title: "Troca de Serviços",
      description: "Parcerias e colaborações entre membros.",
    },
    {
      icon: Compass,
      title: "Dinâmicas Guiadas",
      description: "Networking estruturado e eficiente.",
    },
    {
      icon: BookOpen,
      title: "Conteúdos e Workshops",
      description: "Aprendizado contínuo com especialistas.",
    },
    {
      icon: MessageCircle,
      title: "Comunidade Ativa",
      description: "Suporte diário e trocas constantes.",
    },
    {
      icon: Clock,
      title: "Acesso Antecipado",
      description: "Oportunidades internas exclusivas.",
    },
    {
      icon: Star,
      title: "Ambiente Premium",
      description: "Qualidade em cada interação.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="text-primary">crescer</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Uma estrutura completa pensada para maximizar seu potencial de networking e crescimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
