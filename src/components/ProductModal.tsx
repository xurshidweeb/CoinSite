import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Check,
} from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import coin from "../coins.png";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [added, setAdded] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-pill flex items-center justify-center hover:bg-white/20 shadow-lg text-foreground transition-all"
        >
          <X size={20} />
        </button>

        {/* IMAGE GALLERY (FIX QILINGAN) */}
        <div className="relative h-[320px] sm:h-[420px] bg-white/20 flex items-center justify-center shrink-0">
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className="max-w-full max-h-full object-contain p-4 mix-blend-multiply"
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-pill flex items-center justify-center hover:bg-white/20 shadow-lg text-foreground transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-pill flex items-center justify-center hover:bg-white/20 shadow-lg text-foreground transition-all"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-primary w-6"
                        : "bg-primary/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-xl shrink-0">
          <h2 className="text-2xl font-bold mb-3">{product.name}</h2>

          {product.description && (
            <p className="text-muted-foreground mb-4">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img src={coin} alt="Coin" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Narxi</p>
                <p className="text-xl font-bold text-[#ffbf00]">
                  {product.price} coin
                </p>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className={`gap-2 rounded-full px-6 transition-all shadow-md ${
                added
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              {added ? (
                <>
                  <Check size={20} />
                  Qo‘shildi
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Savatga
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
