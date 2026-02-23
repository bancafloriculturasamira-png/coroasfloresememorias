import ProductCard from "./ProductCard";

interface CatalogProps {
  images: {
    coroa1: string;
    coroa2: string;
    coroa3: string;
    coroa4: string;
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
      price: "R$ 249",
    },
    {
      image: images.coroa3,
      title: "Coroa Eterna Saudade",
      description: "Arranjo tradicional com flores mistas em tons suaves, simbolizando amor eterno.",
      price: "R$ 199",
    },
    {
      image: images.coroa4,
      title: "Coroa Celestial",
      description: "Design sofisticado com orquídeas e rosas, para uma despedida elegante e memorável.",
      price: "R$ 399",
      tag: "Premium",
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
