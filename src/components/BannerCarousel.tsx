import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/banners";

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  // Auto-slide har 5 sekundda
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (banners.length === 0) return null;

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] overflow-hidden rounded-3xl glass-card">
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="min-w-full h-full relative"
          >
            <img 
              src={banner.image} 
              alt={banner.title || "Banner"}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Title */}
            {banner.title && (
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {banner.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-pill hover:bg-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90"
            aria-label="Oldingi"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-pill hover:bg-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90"
            aria-label="Keyingi"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary-foreground w-6" 
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
              }`}
              aria-label={`Banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
