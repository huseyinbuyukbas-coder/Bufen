import { INFO_CARDS } from "../data";

export function InfoBar() {
  return (
    <section className="bg-[#0A0A0A] border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {INFO_CARDS.map((card, index) => (
            <div 
              key={index} 
              className="flex-none w-[70%] sm:w-1/2 md:w-1/4 px-8 py-8 border-r border-white/10 last:border-r-0 snap-start flex flex-col justify-center"
            >
              <span className="font-black text-2xl md:text-3xl text-[#FFBF00] mb-1">{card.title}</span>
              <span className="text-white/50 font-bold uppercase tracking-widest text-[10px] md:text-xs">{card.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
