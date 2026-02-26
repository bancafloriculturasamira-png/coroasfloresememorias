import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}>

        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-primary-foreground/90 text-sm font-medium">Homenagens com Carinho e Respeito</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Coroas de Flores
            <span className="block text-accent mt-2">para Momentos de Despedida</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>Expressamos sua homenagem com arranjos florais delicados e elegantes. Entrega rápida, com o cuidado que o momento exige.


          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="accent" className="text-lg px-8 py-6">
              Ver Catálogo
            </Button>
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" asChild>
              <a href="tel:+5511913228722">
                <Phone className="w-5 h-5 mr-2" />
                (11) 91322-8722
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-accent">24h</p>
              <p className="text-primary-foreground/70 text-sm">Atendimento</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-accent">1h</p>
              <p className="text-primary-foreground/70 text-sm">Entrega*</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-accent">ENTREGA
              </p>
              <p className="text-primary-foreground/70 text-sm">RÁPIDA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>);};

export default Hero;