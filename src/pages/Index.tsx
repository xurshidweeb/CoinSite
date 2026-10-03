import { useState } from "react";
import { Header } from "@/components/Header";
import { BannerCarousel } from "@/components/BannerCarousel";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { CartModal } from "@/components/CartModal";
import { products, Product, categories } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { Sparkles } from "lucide-react";
import { CoinInfoBanner } from "@/components/CoinBaner";


const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  
  const { 
    items, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalItems, 
    totalCoins 
  } = useCart();

  const filteredProducts = activeCategory === "Barchasi" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header 
        cartItemsCount={totalItems} 
        onCartClick={() => setShowCart(true)} 
      />

      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Coin Info Banner */}
        <CoinInfoBanner />

        {/* Products Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Mahsulotlar</h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "glass-pill-active"
                    : "glass-pill text-white hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Bu kategoriyada mahsulotlar yo'q</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-white/20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-medium">
            © 2024 IT Time Academy. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <CartModal 
          items={items}
          totalCoins={totalCoins}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onClearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Index;
