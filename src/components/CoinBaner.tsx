import { useState } from "react";
import { Coins, Info, X, ChevronDown, ChevronUp, Gift, BookOpen, Trophy, Calendar, Users, Calculator, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../coins.png"
const coinSections = [
  {
    icon: BookOpen,
    title: "Coin berish tartibi",
    items: [
      "Darsga qatnashsa — 4 coin",
      "Uy vazifasini bajarib kelsa — 3 coin",
      "Darsda faol qatnashsa — 3 coin",
    ],
  },
  {
    icon: Calculator,
    title: "Oylik Coin To'plash Qoidalari",
    items: [
      "1 oy ichida 11 ta darsda 110 coin to'playsiz",
      "12-darsda (oylik imtihon) 40 coin to'playsiz",
      "Jami 1 oyda 150 coin to'plash mumkin",
      "⚠️ 110 coindan kam to'plasangiz, coinlar 0 ga tushadi!",
    ],
  },
  {
    icon: Calendar,
    title: "To'lov Vaqtiga Qarab Bonuslar",
    items: [
      "1-sanagacha to'lov qilsa — 200 coin",
      "5-sanagacha to'lov qilsa — 150 coin",
      "10-sanagacha to'lov qilsa — 100 coin",
    ],
  },
  {
    icon: Users,
    title: "Do'st olib kelsangiz bonus",
    items: [
      "Har 1 nafar do'stingiz uchun — 300 ming so'm",
      "2 nafar = 600 ming so'm va hokazo",
    ],
  },
  {
    icon: Trophy,
    title: "Eng ko'p coin to'plagan",
    items: [
      "Har bir yo'nalish bo'yicha eng ko'p coin to'plaganga 100,000 so'm pul mukofoti",
      "Teng coin bo'lsa, test olinadi va 1-o'rin aniqlanadi",
    ],
  },
  {
    icon: Gift,
    title: "Coinlarni almashtirish vaqti",
    items: [
      "Har oyning 1-sanasidan 5-sanasigacha",
      "Coinga sovg'a olish majburiy emas",
      "Oylar davomida to'plab, kattaroq sovg'a olishingiz mumkin",
    ],
  },
  {
    icon: Calculator,
    title: "Maksimal coin yig'ish",
    items: [
      "1 fandan jami: 150 coin",
      "1-gacha to'lov qilsa: 200 coin",
      "Jami: 350 coin",
    ],
  },
  {
    icon: Medal,
    title: "Olimpiada mukofotlari",
    items: [
      "1-o'rin — 300,000 so'm",
      "2-o'rin — 200,000 so'm",
      "3-o'rin — 100,000 so'm",
    ],
  },
];

export function CoinInfoBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-card p-5 sm:p-6 mt-4">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur flex items-center justify-center shadow-sm shrink-0">
                <img src={logo} alt="IT Time Academy Logo" className="w-12 h-12 object-contain" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-foreground text-base sm:text-lg">
                Qanday qilib ko'proq coin to'plash mumkin?
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 truncate">
                Bilim + Faollik = Mukofot
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 shrink-0">
            <Button
              onClick={() => window.open('https://docs.google.com/spreadsheets/d/1qy5IZlZjlzTyYBQPCjgC_AtCvWeUbtPd84Ug-nxxwSI/edit?gid=1717660846#gid=1717660846', '_blank')}
              className="bg-primary/90 hover:bg-primary text-white rounded-full gap-2 shadow-md"
            >
              <Trophy size={18} />
              <span className="hidden sm:inline">Retingni ko'rish</span>
            </Button>
            <Button
              onClick={() => setShowModal(true)}
              className="glass-pill text-white gap-2 shadow-sm"
            >
              <Info size={18} />
              <span className="hidden sm:inline">Ma'lumot</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] glass-card rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/40 bg-white/30 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                   <img src={logo} alt="IT Time Academy Logo" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">IT Time Akademiya</h2>
                  <p className="text-muted-foreground text-sm font-medium">Coin to'plang, sovg'alarni bepulga qo'lga kiriting</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {coinSections.map((section, idx) => (
                <CoinSection key={idx} section={section} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CoinSection({ section }: { section: typeof coinSections[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;

  return (
    <div className="glass-card rounded-2xl overflow-hidden mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 hover:bg-white/40 transition-colors text-left"
      >
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-sm">
          <Icon size={18} className="text-white" />
        </div>
        <span className="font-semibold text-foreground flex-1">{section.title}</span>
        {open ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
      </button>
      
      {open && (
        <div className="px-4 pb-4 pt-1 space-y-2 animate-fade-in">
          {section.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
              <span className="text-primary mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
