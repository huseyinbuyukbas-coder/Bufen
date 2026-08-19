import { motion } from "motion/react";
import { GALLERY_IMAGES } from "../data";

export function Gallery() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-4">GÖZÜNÜZ DOYSUN</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            BÜF'N'de lezzet kadar sunum da önemlidir. İşte mutfağımızdan kareler.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
            >
              <img 
                src={img} 
                alt={`BÜF'N Gallery ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
          {/* Add a few placeholder masonry blocks if needed to make it look full */}
           <div className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 aspect-[3/4] flex items-center justify-center p-8 text-center border border-white/10">
             <span className="font-black text-3xl text-white/30 italic serif uppercase tracking-tighter">Sokak Lezzetleri</span>
           </div>
           <div className="break-inside-avoid rounded-2xl overflow-hidden bg-white/5 aspect-square flex items-center justify-center p-8 text-center border border-white/10">
             <span className="font-black text-3xl text-white/30 italic serif uppercase tracking-tighter">Gece Açık</span>
           </div>
        </div>
      </div>
    </section>
  );
}
