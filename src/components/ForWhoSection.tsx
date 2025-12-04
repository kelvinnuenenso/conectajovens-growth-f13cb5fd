import { Briefcase, Camera, TrendingUp } from "lucide-react";

const ForWhoSection = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "Jovens Empreendedores",
      description: "Donos de negócios, startups ou projetos que buscam crescer através de conexões estratégicas, parcerias e oportunidades de mercado.",
      features: ["Networking B2B", "Parcerias comerciais", "Investidores e mentores"],
    },
    {
      icon: Camera,
      title: "Criadores de Conteúdo",
      description: "Influenciadores, YouTubers, podcasters e criadores digitais que querem expandir sua rede e monetizar seu trabalho.",
      features: ["Collabs exclusivas", "Marcas e patrocínios", "Comunidade de criadores"],
    },
    {
      icon: TrendingUp,
      title: "Profissionais Ambiciosos",
      description: "Pessoas que trabalham com CLT ou autônomo e querem acelerar sua carreira, encontrar novas oportunidades e evoluir constantemente.",
      features: ["Oportunidades de carreira", "Desenvolvimento pessoal", "Mentoria profissional"],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Para Quem É
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Feito para quem quer{" "}
            <span className="text-primary">ir além</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Nossa comunidade é para jovens que não se contentam com o comum e buscam crescer de forma acelerada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <audience.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{audience.description}</p>
              
              <ul className="space-y-3">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
