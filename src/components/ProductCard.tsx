import { Product } from "@/data/products";
import { CoinBadge } from "./CoinBadge";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group glass-card rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-white/20 p-2">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-3xl" />
      </div>

      {/* Content */}
      <div className="p-4 pt-2">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <CoinBadge amount={product.price} size="md" />
      </div>
    </div>
  );
}
