import { motion } from "motion/react";
import wetBurgerImg from "../assets/images/wet_burger_1787161416059.jpg";
import bazlamaImg from "../assets/images/bazlama_toast_1787161429250.jpg";
import cigerImg from "../assets/images/ciger_sandvic_1787162174989.jpg";
import patsoImg from "../assets/images/sosisli_patso_1787162235920.jpg";
import pilavImg from "../assets/images/tavuk_pilav_1787162198910.jpg";
import patatesImg from "../assets/images/ozel_patates_1787162210092.jpg";

const FAVORITES = [
  {
    name: "Islak Hamburger",
    description: "BÜF'N'in özel domates sosuyla hazırlanan efsane imza lezzeti.",
    tag: "Favorilerden",
    image: wetBurgerImg
  },
  {
    name: "Bazlama Tost",
    description: "Sıcak, bol malzemeli, çıtır kenarlı ve doyurucu.",
    tag: "Çok Seviliyor",
    image: bazlamaImg
  },
  {
    name: "Ciğer Sandviç",
    description: "Taze, sıcak ve bol lezzetli sokak klasiği.",
    tag: "Denemelisin",
    image: cigerImg
  },
  {
    name: "Sosisli Patso",
    description: "Gece atıştırmalarının vazgeçilmez favorisi.",
    tag: "",
    image: patsoImg
  },
  {
    name: "Tavuk Pilav",
    description: "Doyurucu, hızlı ve lezzetli bir alternatif.",
    tag: "",
    image: pilavImg
  },
  {
    name: "Özel Patates",
    description: "Özel baharat karışımı ile çıtır çıtır.",
    tag: "",
    image: patatesImg
  }
];

export function Favorites() {
  return (
    <section className="py-24 bg-[#0F0F0F]" id="favorites">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black italic serif uppercase text-[#F5F5F0] mb-4 tracking-tighter"
          >
            BÜF'N'İN <span className="text-[#FFBF00]">FAVORİLERİ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl font-medium"
          >
            Müşterilerimizin tekrar tekrar tercih ettiği, Beylikdüzü'nün en sevilen sokak lezzetleri.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAVORITES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl bg-white/5 overflow-hidden border border-white/10 hover:border-[#FFBF00]/50 transition-colors"
            >
              <div className="aspect-[4/3] bg-black relative overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/30 font-black tracking-tighter text-3xl">
                    BÜF'N
                  </div>
                )}
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-[#FFBF00] text-black font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl uppercase tracking-tight text-[#F5F5F0] mb-2">{item.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
