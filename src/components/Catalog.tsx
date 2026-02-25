import ProductCard from "./ProductCard";

interface CatalogProps {
  images: {
    coroa1: string;
    coroa2: string;
    coroa3: string;
    coroa4: string;
    coroa5: string;
    coroa6: string;
    coroa7: string;
    coroa8: string;
    coroa9: string;
  };
}

const Catalog = ({ images }: CatalogProps) => {
  const products = [
    {
      image: images.coroa1,
      title: "Coroa Imperial",
      description: "Arranjo majestoso com rosas vermelhas, gerberas, girassois, anturios, lírios e folhagens nobres. Perfeito para homenagens especiais.",
      price: "R$ 400",
      tag: "Mais Vendida",
    },
    {
      image: images.coroa2,
      title: "Coroa Serenidade",
      description: "Composição delicada com crisântemos brancos, rosas, lirios, anturios e gérberas, transmitindo paz e tranquilidade.",
      price: "R$ 450",
    },
    {
      image: images.coroa3,
      title: "Coroa Eterna Saudade",
      description: "Composição de rosas, lírios e antúrios. Perfeito para homenagens.",
      price: "R$ 900",
    },
    {
      image: images.coroa4,
      title: "Coroa Celestial",
      description: "Design sofisticado com orquídeas, para uma despedida elegante e memorável.",
      price: "R$ 1.635",
      tag: "Premium",
    },
    {
      image: images.coroa5,
      title: "Coroa Gratidão",
      description: "Coroa delicada com gerberas coloridas, crisântemos e folhagens verdes, transmitindo gratidão e carinho.",
      price: "R$ 300",
    },
    {
      image: images.coroa6,
      title: "Coroa Eternidade",
      description: "Composição marcante com rosas, gerberas, girassol e lírios brancos, simbolizando amor eterno e respeito.",
      price: "R$ 900",
    },
    {
      image: images.coroa7,
      title: "Coroa Paz Eterna",
      description: "Coroa de flores brancas, rosas e crisantemos — representando pureza e serenidade.",
      price: "R$ 300",
    },
    {
      image: images.coroa8,
      title: "Coroa Nobreza",
      description: "Combinação de girassol e crisantemos amarelos, para uma homenagem sofisticada.",
      price: "R$ 600",
    },
    {
      image: images.coroa9,
      title: "Coroa Majestade",
      description: "Coroa de flores brancas, rosas e crisantemos. Homenagem imponente e marcante.",
      price: "R$ 600",
      tag: "Destaque",
    },
  ];

  return (
    <section id="catalogo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Nossos Arranjos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Coroas de Flores
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada arranjo é confeccionado com flores frescas selecionadas, 
            expressando respeito e carinho em momentos de despedida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
