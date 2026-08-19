import { Phone, Navigation, Menu as MenuIcon, ShoppingBag } from "lucide-react";

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 border-t border-white/10 backdrop-blur-lg z-50 md:hidden pb-safe">
      <div className="flex justify-around items-center p-2">
        <a href="tel:05337154042" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-[#FFBF00] active:text-[#FFBF00] flex-1">
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Ara</span>
        </a>
        <a href="#location" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-[#FFBF00] active:text-[#FFBF00] flex-1">
          <Navigation className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Konum</span>
        </a>
        <a href="#order" className="flex flex-col items-center justify-center p-2 text-[#FFBF00] flex-1 -mt-6">
          <div className="bg-[#FFBF00] text-black p-4 rounded-full shadow-lg shadow-[#FFBF00]/20 mb-1 border-4 border-[#0A0A0A]">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFBF00]">Sipariş</span>
        </a>
        <a href="#menu" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-[#FFBF00] active:text-[#FFBF00] flex-1">
          <MenuIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Menü</span>
        </a>
      </div>
    </div>
  );
}
