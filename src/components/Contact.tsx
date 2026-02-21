import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Fale Conosco</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">
                Estamos Aqui Para Ajudar
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Entendemos a delicadeza do momento. Nossa equipe está disponível 
                24 horas para atendê-lo com respeito e agilidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone / WhatsApp</h3>
                  <p className="text-primary-foreground/70">(11) 91322-8722</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                  <p className="text-primary-foreground/70">24 horas, todos os dias</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Área de Entrega</h3>
                  <p className="text-primary-foreground/70">Todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-card-hover">
            <h3 className="font-serif text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Seu nome" />

              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999" />

              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Local de Entrega</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Cidade, Estado ou Cemitério" />

              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem (Opcional)</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={3}
                  placeholder="Detalhes adicionais..." />

              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <MessageCircle className="w-5 h-5" />
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};

export default Contact;