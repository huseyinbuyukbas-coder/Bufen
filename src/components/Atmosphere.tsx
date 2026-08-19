import { motion } from "motion/react";
import bufnExteriorImg from "../assets/images/bufn_exterior_1787162287857.jpg";

export function Atmosphere() {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden bg-white/5 border border-white/10 relative"
          >
             <img 
               src={bufnExteriorImg} 
               alt="BÜF'N Mekan Görseli" 
               className="w-full h-full object-cover"
             />
          </motion.div>

          <div className="lg:pl-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-6"
            >
              SADECE YEMEK İÇİN DEĞİL, <br />
              <span className="text-[#FFBF00]">KEYİF İÇİN DE GEL.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-8"
            >
              Samimi atmosferi, güler yüzlü ekibi ve sıcak mekan konseptiyle BÜF'N, hızlı bir atıştırmalıktan daha fazlasını sunuyor. Arkadaşlarınla buluşmak, iş arasında soluklanmak veya sadece iyi bir yemek için kapımız her zaman açık.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-16 h-1 bg-[#FFBF00] rounded-full" />
              <div className="w-4 h-1 bg-white/10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
