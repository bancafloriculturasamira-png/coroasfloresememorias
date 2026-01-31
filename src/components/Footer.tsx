import { Flower2, Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8 text-accent" />
              <span className="font-serif text-xl font-bold">Flores & Memórias</span>
            </a>
            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              Há mais de 15 anos prestando homenagens com carinho e respeito. 
              Entendemos a delicadeza de cada momento e cuidamos de cada detalhe 
              para expressar seus sentimentos.
            </p>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <span>Feito com amor e respeito</span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#catalogo" className="text-background/70 hover:text-accent transition-colors">
                  Catálogo de Coroas
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-accent transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-accent transition-colors">
                  Política de Entrega
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@floresememorias.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span>Atendimento e entregas em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Flores & Memórias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
