import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Em um momento tão difícil, a equipe foi extremamente atenciosa e respeitosa. A coroa chegou linda e no horário combinado.",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "São Paulo, SP",
    text: "Atendimento 24 horas fez toda diferença. Precisei às 3h da manhã e fui atendido prontamente. Muito obrigado pelo carinho.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "As flores estavam impecáveis e a entrega foi muito rápida. Recomendo de olhos fechados para quem precisa desse serviço.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Momentos delicados merecem cuidado especial. 
            Veja o que nossos clientes falam sobre nosso atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted/50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
