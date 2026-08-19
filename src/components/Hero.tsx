import { motion } from "motion/react";
import { Star, MapPin, Phone } from "lucide-react";
import heroImg from "../assets/images/hero_bg_1787161399375.jpg";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]/30" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mt-8 md:mt-16"
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-[#FFBF00] text-sm">★★★★★</span>
              <span className="text-[10px] md:text-xs font-bold tracking-tight">5.0 / 743 Google Yorumu</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-[#FFBF00] text-sm">★★★★★</span>
              <span className="text-[10px] md:text-xs font-bold tracking-tight">5.0 / 28 Yandex Yorumu</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-4 md:mb-6 max-w-xl italic serif uppercase">
            BEYLİKDÜZÜ'NDE <br />
            <span className="text-[#FFBF00]">SOKAK</span> LEZZETLERİNİN <br />
            YENİ ADRESİ
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-md leading-relaxed mb-6 md:mb-8">
            Islak hamburgerden bazlama tosta, ciğer sandviçten tavuk pilava kadar sevdiğin büfe lezzetleri BÜF'N'de.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="bg-white text-black px-8 py-4 rounded-xl font-black tracking-tight text-sm hover:scale-105 transition-transform flex items-center gap-2"
            >
              MENÜYÜ GÖR
            </a>
            <a 
              href="#location" 
              className="border-2 border-white/20 bg-black/40 backdrop-blur-md px-8 py-4 rounded-xl font-black tracking-tight text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              YOL TARİFİ AL
            </a>
            <a 
              href="tel:05337154042" 
              className="md:hidden border-2 border-white/20 bg-black/40 backdrop-blur-md px-8 py-4 rounded-xl font-black tracking-tight text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2 w-full justify-center"
            >
              <Phone className="w-5 h-5" />
              0533 715 40 42
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
