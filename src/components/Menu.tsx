import { motion } from "motion/react";
import { MENU_CATEGORIES } from "../data";

export function Menu() {
  return (
    <section className="py-24 bg-[#0F0F0F]" id="menu">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-4">MENÜ</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Klasik sokak lezzetlerini BÜF'N kalitesiyle sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {MENU_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-black italic serif uppercase tracking-tight text-[#FFBF00] mb-6 border-b border-white/10 pb-2">
                {category.name}
              </h3>
              <div className="flex flex-col gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg uppercase tracking-tight font-black text-[#F5F5F0] group-hover:text-[#FFBF00] transition-colors">
                        {item.name}
                      </h4>
                      {/* Price could go here, but prompt says optional/none if unknown */}
                      <div className="flex-grow mx-4 border-b border-dashed border-white/20 relative top-[-6px] opacity-30" />
                      <span className="text-white/30 font-bold">-</span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-white/50 leading-relaxed pr-8">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
