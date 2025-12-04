import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JN</span>
              </div>
              <span className="text-foreground font-bold text-xl">
                Jovens de <span className="text-primary">Networking</span>
              </span>
            </div>
            <p className="text-foreground/60 max-w-sm mb-6">
              Conectamos jovens empreendedores, criadores e profissionais que querem acelerar resultados 
              através de networking estratégico e oportunidades reais.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-foreground/60 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-foreground/60 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-foreground/60 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#planos" className="text-foreground/60 hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@jovensdenetworking.com" className="text-foreground/60 hover:text-primary transition-colors">
                  contato@jovensdenetworking.com
                </a>
              </li>
              <li className="text-foreground/60">
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 Jovens de Networking. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
