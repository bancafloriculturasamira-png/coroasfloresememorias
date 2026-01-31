import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  tag?: string;
}

const ProductCard = ({ image, title, description, price, tag }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-serif text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-sm text-muted-foreground">A partir de</p>
            <p className="text-2xl font-serif font-bold text-primary">{price}</p>
          </div>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Encomendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
