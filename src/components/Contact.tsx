import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", local_entrega: "", mensagem: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim() || !form.local_entrega.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      nome: form.nome.trim(),
      telefone: form.telefone.trim(),
      local_entrega: form.local_entrega.trim(),
      mensagem: form.mensagem.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao enviar solicitação", description: "Tente novamente.", variant: "destructive" });
    } else {
      toast({ title: "Solicitação enviada com sucesso!", description: "Entraremos em contato em breve." });
      setForm({ nome: "", telefone: "", local_entrega: "", mensagem: "" });
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Local de Entrega</label>
                <input
                  type="text"
                  value={form.local_entrega}
                  onChange={(e) => setForm({ ...form, local_entrega: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Cidade, Estado ou Cemitério" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem (Opcional)</label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={3}
                  placeholder="Detalhes adicionais..." />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageCircle className="w-5 h-5" />}
                {loading ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};

export default Contact;