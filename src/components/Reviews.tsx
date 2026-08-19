import { motion } from "motion/react";
import { REVIEWS } from "../data";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section className="py-24 bg-[#0F0F0F] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-8"
            >
              BİZİ DENEYENLER <br />
              <span className="text-[#FFBF00]">NE DİYOR?</span>
            </motion.h2>

            <div className="flex flex-col gap-6">
              <div>
                <div className="font-black text-6xl text-[#F5F5F0] flex items-center gap-2 mb-1 tracking-tighter">
                  5.0 <Star className="w-10 h-10 fill-[#FFBF00] text-[#FFBF00]" />
                </div>
                <div className="text-white/50 font-bold uppercase tracking-widest text-xs">743 Google Yorumu</div>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <div className="font-black text-4xl text-[#F5F5F0] flex items-center gap-2 mb-1 tracking-tighter">
                  5.0 <Star className="w-6 h-6 fill-[#FFBF00] text-[#FFBF00]" />
                </div>
                <div className="text-white/50 font-bold uppercase tracking-widest text-[10px]">28 Yandex Yorumu</div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-block mt-8 text-[#FFBF00] hover:text-white font-bold uppercase tracking-widest text-xs underline underline-offset-4 transition-colors"
            >
              Google'da tüm yorumları gör
            </a>
          </div>

          <div className="md:w-2/3 flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[85%] sm:w-[380px] bg-white/5 rounded-3xl p-8 border border-white/10 snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    <span className="text-[#FFBF00]">★★★★★</span>
                    <span className="text-[10px] font-bold ml-2 uppercase tracking-widest text-white/40">Gerçek Yorum</span>
                  </div>
                  <p className="text-base sm:text-lg font-sans font-medium text-[#F5F5F0] leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-[#F5F5F0]">
                    {review.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-[#F5F5F0]">
                      {review.author.split('(')[0].trim()}
                    </span>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      {review.author.includes('Yandex') ? 'Yandex Yorumu' : 'Google Yorumu'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
