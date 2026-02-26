import { Button } from "@/components/ui/button";
import { Phone, Flower2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-primary" />
            <span className="font-serif text-xl font-bold text-foreground">Flores & Memórias</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalogo" className="text-muted-foreground hover:text-foreground transition-colors">
              Catálogo
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          <Button size="sm" className="gap-2" asChild>
            <a href="tel:+5511913228722">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(11) 91322-8722</span>
              <span className="sm:hidden">Ligar</span>
            </a>
          </Button>
        </div>
      </div>
    </header>);};

export default Header;