import { useState, type ChangeEvent } from "react";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Send,
  Loader2,
} from "lucide-react";
import { CartItem } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CoinBadge } from "./CoinBadge";
import { sendToTelegram } from "@/config/telegram";
import { toast } from "sonner";
import { sendToSheets } from "@/config/sheets";

interface CartModalProps {
  items: CartItem[];
  totalCoins: number;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClearCart: () => void;
}

export function CartModal({
  items,
  totalCoins,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClearCart,
}: CartModalProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // +998XXXXXXXXX (13)
  const [user, setUser] = useState(""); // telegram username
  const [branch, setBranch] = useState("");
  const [group, setGroup] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Telefonni faqat O‘zbekiston formati bo‘yicha kiritish:
  // +998 + 9 ta raqam = 13 ta belgi
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;

    // bo‘sh joylarni olib tashlaymiz
    v = v.replace(/\s+/g, "");

    // faqat + va raqam qolsin
    v = v.replace(/[^+\d]/g, "");

    // agar + bilan boshlanmasa, qo‘shamiz
    if (!v.startsWith("+")) v = "+" + v.replace(/\+/g, "");

    // + dan keyin faqat raqamlar qolsin
    v = "+" + v.slice(1).replace(/[^\d]/g, "");

    // +998 majburiy prefix
    if (!v.startsWith("+998")) {
      const digits = v.replace(/[^\d]/g, "");
      const after = digits.startsWith("998") ? digits.slice(3) : digits;
      v = "+998" + after;
    }

    // 13 ta belgidan oshirmaymiz
    v = v.slice(0, 13);

    setPhone(v);
  };

  // Telegram username ni tozalash: @ bo‘lsa olib tashlaymiz, probel yo‘q
  const handleTelegramChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.trim();
    v = v.replace(/\s+/g, "");
    v = v.replace(/^@+/, "");
    setUser(v);
  };

  const handleSubmitOrder = async () => {
    // ✅ name + phone + telegram majburiy, phone 13 ta belgi bo‘lsin
    if (
      !name.trim() ||
      !phone.trim() ||
      !user.trim() ||
      !branch.trim() ||
      !group.trim() ||
      phone.length !== 13
    ) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsSubmitting(true);

    const itemsForSheets = items.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      quantity: item.quantity,
      sum: item.product.price * item.quantity,
    }));

    const productsList = itemsForSheets
      .map((it) => `• ${it.name} x${it.quantity} (${it.sum} coin)`)
      .join("\n");

    const telegramMessage = `
Yangi buyurtma!

Mijoz: ${name}
Telefon: ${phone}
Telegram: @${user}
Filial: ${branch}
Guruh: ${group}

Mahsulotlar:
${productsList}

Jami: ${totalCoins} coin
`.trim();

    const payload = {
      name,
      phone,
      telegram: user,
      branch,
      group,
      totalCoins,
      items: itemsForSheets,
      productsText: productsList,
    };

    const [tgOk, sheetOk] = await Promise.all([
      sendToTelegram(telegramMessage),
      sendToSheets(payload),
    ]);

    setIsSubmitting(false);

    if (tgOk && sheetOk) {
      toast.success("Buyurtmangiz qabul qilindi! Tez orada bog'lanamiz.");
      onClearCart();
      onClose();
    } else if (tgOk && !sheetOk) {
      toast.warning("Telegramga yuborildi, lekin Sheetsga yozilmadi.");
    } else if (!tgOk && sheetOk) {
      toast.warning("Sheetsga yozildi, lekin Telegramga yuborilmadi.");
    } else {
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-lg
          max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)]
          glass-card rounded-3xl overflow-hidden shadow-2xl animate-fade-in
          flex flex-col min-h-0
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between p-3 sm:p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" />
            <h2 className="text-lg sm:text-xl font-bold text-card-foreground">
              {showCheckout ? "Buyurtma berish" : "Savat"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-pill hover:bg-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4">
          {!showCheckout ? (
            items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag
                  size={64}
                  className="mx-auto text-muted-foreground/30 mb-4"
                />
                <p className="text-muted-foreground">Savat bo'sh</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-muted/50 rounded-xl"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-card-foreground line-clamp-1">
                        {item.product.name}
                      </h3>
                      <CoinBadge
                        amount={item.product.price}
                        size="sm"
                        className="mt-1"
                      />

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="self-start p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )
          ) : (
            // Checkout Form
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Ismingiz
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingizni kiriting"
                  className="bg-muted/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Telefon raqamingiz
                </label>
                <Input
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998901234567"
                  inputMode="numeric"
                  maxLength={13}
                  className="bg-muted/50"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Format: +998XXXXXXXXX (13 ta belgi)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Telegram username
                </label>
                <Input
                  value={user}
                  onChange={handleTelegramChange}
                  placeholder="masalan: username"
                  className="bg-muted/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Qaysi filyalimizda o'qisiz
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/50 px-3 py-2 text-sm text-card-foreground outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Filial tanlang</option>
                  <option value="Yashnabod">Yashnabod</option>
                  <option value="Yunusobos">Yunusobos</option>
                  <option value="Qo'yliq">Qo'yliq</option>
                  <option value="Keles1">Keles 1</option>
                  <option value="Keles2">Keles 2</option>
                  <option value="Namangan (Sardoba)">Namangan (Sardoba)</option>
                  <option value="Namangan (Do'stlik)">Namangan (Do'stlik)</option>
                  <option value="Namangan (Mingbuloq)">Namangan (Mingbuloq)</option>
                  <option value="Namangan (Toshbuloq)">Namangan (Toshbuloq)</option>
                  <option value="Namangan (Davlatobod)">Namangan (Davlatobod)</option>
                  <option value="Namangan (Pop)">Namangan (Pop)</option>
                  <option value="Namangan (To'raqo'rg'on)">Namangan (To'raqo'rg'on)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Guruhingizni nomini kiriting
                </label>
                <Input
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  placeholder="Guruhingizni nomini kiriting"
                  className="bg-muted/50"
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-xl">
                <h4 className="font-medium text-card-foreground mb-2">
                  Buyurtma tafsilotlari
                </h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <span className="pr-3">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="whitespace-nowrap">
                        {item.product.price * item.quantity} coin
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-card-foreground">
                  <span>Jami:</span>
                  <span className="text-coin">{totalCoins} coin</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="shrink-0 p-3 sm:p-4 border-t border-border">
            {!showCheckout ? (
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Jami</p>
                  <p className="text-xl sm:text-2xl font-bold text-coin truncate">
                    {totalCoins} coin
                  </p>
                </div>
                <Button
                  onClick={() => setShowCheckout(true)}
                  size="lg"
                  className="gradient-primary hover:opacity-90"
                >
                  Sotib olish
                </Button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowCheckout(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Orqaga
                </Button>
                <Button
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting}
                  className="flex-1 gradient-primary hover:opacity-90 gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Yuborish
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
