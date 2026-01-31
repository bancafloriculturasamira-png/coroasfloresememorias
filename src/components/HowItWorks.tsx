import { Phone, Flower2, Truck, Heart } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Entre em Contato",
    description: "Ligue ou envie mensagem pelo WhatsApp. Atendemos 24 horas.",
  },
  {
    icon: Flower2,
    title: "Escolha o Arranjo",
    description: "Selecione entre nossas opções ou personalize sua homenagem.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Entregamos em até 2 horas na região metropolitana.",
  },
  {
    icon: Heart,
    title: "Homenagem Realizada",
    description: "Sua expressão de carinho chega com todo respeito e delicadeza.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Processo Simples</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cuidamos de cada detalhe para que você possa expressar 
            sua homenagem sem preocupações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 mb-6 mx-auto w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
