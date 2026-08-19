import { motion } from "motion/react";
import { FEATURES } from "../data";

export function Features() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-6 leading-[0.9]"
            >
              BÜFE DEDİK, <br />
              <span className="text-[#FFBF00]">ÖYLESİNE DEMEDİK.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
            >
              İyi malzeme, hızlı servis ve samimi bir ortamı bir araya getiriyoruz. Beylikdüzü'nün yeni nesil büfesi olarak standartları yükseltiyoruz.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-[#FFBF00]"
                >
                  <h3 className="font-black text-lg uppercase tracking-tight text-[#F5F5F0] mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[60px] overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBF00]/10 to-transparent z-10" />
            <div className="w-full h-full flex flex-col items-center justify-center font-black italic serif uppercase text-9xl text-white/5 rotate-[-10deg] select-none tracking-tighter">
              BÜF'N
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
