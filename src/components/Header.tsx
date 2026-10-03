import { ShoppingCart } from "lucide-react";
import logo from "../../public/logo.png";
import PricesModal from "./PricesModal";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="glass-header w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 py-1">
          <img src={logo} alt="IT Time Logo" className="h-10 object-contain bg-white/90 rounded-xl px-2 py-1 shadow-sm" />
        </div>

        <div className="flex items-center gap-4">
          <PricesModal />

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative w-12 h-12 rounded-full glass-pill hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <ShoppingCart size={22} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-xs font-bold text-white flex items-center justify-center shadow-md animate-bounce-gentle">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
