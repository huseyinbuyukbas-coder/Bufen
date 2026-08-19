import { motion } from "motion/react";
import { MapPin, Navigation, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 bg-[#0F0F0F]" id="location">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-6"
            >
              BÜF'N'E <span className="text-[#FFBF00]">NASIL GELİNİR?</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">Adres</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    İnmarı Sitesi, Marmara Mahallesi, Avrasya Cd. No:2, 34524 Beylikdüzü / İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">Telefon</h3>
                  <a href="tel:05337154042" className="text-white/70 hover:text-white transition-colors font-bold tracking-wider">
                    0533 715 40 42
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#" // Real maps link goes here later
                className="bg-white hover:bg-white/90 text-black font-black px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm tracking-tight"
              >
                <Navigation className="w-5 h-5" />
                YOL TARİFİ AL
              </a>
              <a 
                href="tel:05337154042"
                className="border-2 border-white/20 bg-black/40 hover:bg-white/10 text-white font-black px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm tracking-tight"
              >
                <Phone className="w-5 h-5" />
                TELEFON ET
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-[500px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative"
          >
            {/* Google Maps iframe placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 bg-[#0F0F0F]">
              <MapPin className="w-12 h-12 mb-4 opacity-50" />
              <span className="font-black italic serif uppercase text-2xl tracking-tighter">Harita Yükleniyor...</span>
              <span className="text-xs font-bold uppercase tracking-widest mt-2 opacity-50">Gerçek harita kodu buraya eklenecek</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
