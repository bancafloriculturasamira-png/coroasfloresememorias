import { Quote } from "lucide-react";

const grupos = [
  {
    titulo: "Familiares",
    mensagens: [
      "SAUDADES ETERNAS DE SEUS FILHOS, NORAS, GENROS, E NETOS.",
      "NOSSA FAMÍLIA SENTE ENORMEMENTE A SUA PARTIDA. DESCANSE EM PAZ.",
      "HOJE MAIS UMA ESTRELA VOLTOU A BRILHAR NO CÉU. SAUDADES, DE SEU SOBRINHO.",
      "COM TODO AMOR E CARINHO, DE SEUS FAMILIARES.",
      "MÃE/PAI, TE AMAREMOS ETERNAMENTE-SEUS FILHOS.",
      "A SAUDADE É GRANDE EO NOSSO AMOR É PARA SEMPRE.",
      "SEU SORRISO SEMPRE ESTARÁ EM NOSSAS LEMBRANÇAS, SEUS IRMÃOS E IRMÃS.",
      "VÁ EM PAZ, MEU ANJINHO. PAPAI E MAMÃE TE AMAM!",
      "NOSSA FAMÍLIA NUNCA MAIS SERÁ A MESMA, TE AMAREMOS PARA SEMPRE!",
      "VOVÓ/VOVÔ, SENTIREMOS MUITA SAUDADE. SIGA EM PAZ.",
      "PAI/MÃE, VOCÊ SEMPRE ESTARÁ PRESENTE EM NOSSOS CORAÇÕES. SEUS FILHOS.",
      "TIO(A), OBRIGADO POR FAZER PARTE DA NOSSA VIDA, SEUS SOBRINHOS.",
      "A MINHA TIA, DEDICO TODO AMOR E SAUDADE QUE CARREGO NO PEITO.",
    ],
  },
  {
    titulo: "Esposo(a)",
    mensagens: [
      "NEM A MORTE SUPERARÁ NOSSO AMOR, SUA ESPOSA ( ESPOSO ) .",
      "A MORTE NÃO É UM ADEUS, MAS UMA “ATÉ BREVE “. TE AMO PARA SEMPRE.",
      "ENQUANTO MEU CORAÇÃO BATER, BATERÁ POR VOCÊ. TE AMO.",
      "A SAUDADE É GRANDE E MEU AMOR É PARA SEMPRE.",
      "NINGUÉM MORRE ENQUANTO PERMANECE VIVO NO CORAÇÃO DE ALGUÉM.",
      "O AMOR NÃO COMHECE A BARREIRA DA SEPARAÇÂO. TE AMAREI PARA SEMPRE.",
      "ESTEJA EM PAZ E SEMPRE ESTAREMOS JUNTOS. DO SEU ESPOSO ( DA SUA ESPOSA );",
      "DESCANSE EM PAZ NA SUA NOVA MORADA, COM SAUDADE VIVEREI ATÉ O NOSSO.",
      "SAUDADE ETERNA DE QUEM FICOU COM O CORAÇÃO APERTADO E MAIS SOLITÁRIO.",
      "MEUS PENSAMENTTOS, ORAÇÕES E HOMENAGENS SERÃO SEMPRE PARA VOCÊ.",
    ],
  },
  {
    titulo: "Amigos",
    mensagens: [
      "OBRIGADO POR FAZER PARTE DA MINHA VIDA E ME ENSINAR TANTAS VEZES. DO SEU",
      "SUA AMIZADE SEMPRE SERÁ IMPORTANTE PARA TODOS NÓS.",
      "FOI UMA HONRA COMPARTILHAR DA SUA AMIZADE E CARINHO.",
      "A AMIZADE SINCERA É UM ABRIGO SEGURO. SENTIREMOS SAUDADE.",
      "SENTIMENTOS DE SEUS ETERNOS AMIGOS.",
      "QUERIDO AMIGO, SEU SORRISO NOS FARÁ FALTA. SAUDADES ETERNAS.",
      "COM MUITO AMOR E SAUDADE, DOS SEUS AMIGOS QUE NUNCA SE ESQUECERÃO DE VOCÊ.",
      "AMIGO, VOCÊ SEMPRE ESTARÁ EM NOSSAS LEMBRANÇAS.",
      "SUA AMIZADE ENGRANDECEU A NOSSA VIDA. SEMTIREMOS SAUDADE.",
      "AMIGO É COISA PRA SE GUARDAR, DENTRO DO CORAÇÃO. DOS SEUS AMIGOS ETERNOS.",
      "VALEU POR VOCÊ EXISTIR, MEU AMIGO!",
    ],
  },
  {
    titulo: "Colegas de trabalho",
    mensagens: [
      "NOSSA HOMENAGEM AO GRANDE COMPANHEIRO DO QUAL SENTIREMOS SAUDADES. AMIGOS DA EMPRESA.",
      "SENTIMENTOS DA DIRETORIA E COLABORADORES DA EMPRESA X.",
      "NOS SENTIMOS HONRADOS POR TERMOS TRABALHADO COM VOCÊ, SEUS AMIGOS DA",
      "NOSSA EQUIPE SENTE MUITO A SUA PERDA.",
      "HOMENAGENS SINCERAS DOS COLEGAS DA EMPRESA.",
      "A FAMÍLIA (SOBRENOME), NOSSAS SINCERAS CONDOLÊNCIAS -COLEGAS DA EMPRESA X",
    ],
  },
];

const DizeresFaixa = () => {
  return (
    <section id="dizeres-faixa" className="py-20 bg-background scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Mensagens de carinho
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Dizeres/faixa
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Escolha uma mensagem para expressar seu carinho e informe o número desejado ao fazer seu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {grupos.map((grupo) => (
            <article key={grupo.titulo} className="bg-card rounded-lg border border-border shadow-card overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-secondary">
                <Quote className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">{grupo.titulo}</h3>
              </div>
              <ol className="divide-y divide-border">
                {grupo.mensagens.map((mensagem) => {
                  numero += 1;
                  const itemNumero = numero;
                  return (
                    <li key={itemNumero} className="flex gap-4 px-6 py-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-primary text-sm font-semibold flex items-center justify-center">
                        {itemNumero}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{mensagem}</p>
                    </li>
                  );
                })}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DizeresFaixa;
