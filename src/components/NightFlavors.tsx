import { motion } from "motion/react";
import nightVibeImg from "../assets/images/night_vibe_1787161443539.jpg";

export function NightFlavors() {
  return (
    <section className="relative py-32 bg-[#0F0F0F] overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${nightVibeImg})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-6 drop-shadow-2xl"
          style={{ textShadow: '0 0 40px rgba(255, 191, 0, 0.3)' }}
        >
          GECE ACIKTIYSAN <br />
          <span className="text-[#FFBF00]">BÜF'N AÇIK. 🌙</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Gece atıştırmalığı, arkadaş buluşması, sahur veya eve dönüş yolunda sıcak bir lezzet... BÜF'N'de gece de lezzet var. Her gün 02:00'ye kadar hizmetinizdeyiz.
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="#menu"
          className="inline-block bg-white text-black hover:bg-zinc-200 font-bold px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
        >
          GECE LEZZETLERİNİ KEŞFET
        </motion.a>
      </div>
    </section>
  );
}
