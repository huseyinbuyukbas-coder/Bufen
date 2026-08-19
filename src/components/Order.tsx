import { motion } from "motion/react";
import { Phone, ShoppingBag } from "lucide-react";

export function Order() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/10" id="order">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-6"
        >
          SİPARİŞ <span className="text-[#FFBF00]">VER</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg max-w-2xl mx-auto mb-12"
        >
          Canın ne zaman çekerse BÜF'N lezzetleri bir tık veya bir telefon uzağında.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {/* Using # for placeholder URLs as requested */}
          <a href="#" className="flex-1 min-w-[200px] bg-[#FF8000] hover:bg-[#E67300] text-white font-bold py-4 px-6 rounded-2xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Migros Yemek
          </a>
          <a href="#" className="flex-1 min-w-[200px] bg-[#E31E24] hover:bg-[#CC1A20] text-white font-bold py-4 px-6 rounded-2xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Tıkla Gelsin
          </a>
          <a href="#" className="flex-1 min-w-[200px] bg-[#EA004B] hover:bg-[#D10043] text-white font-bold py-4 px-6 rounded-2xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Yemeksepeti
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
            <span className="text-white/30 font-bold text-[10px] uppercase tracking-widest">VEYA</span>
            <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
          </div>
          
          <a 
            href="tel:05337154042" 
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-black tracking-tight text-2xl px-8 py-5 rounded-full transition-colors border border-white/10"
          >
            <Phone className="w-6 h-6 text-[#FFBF00]" />
            0533 715 40 42
          </a>
        </motion.div>
      </div>
    </section>
  );
}
