import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Instagram Section */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div>
            <h2 className="text-4xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-2">BÜF'N'İ INSTAGRAM'DA TAKİP ET</h2>
            <p className="text-white/70">Yeni lezzetler, günlük paylaşımlar ve BÜF'N'den haberler için bizi takip et.</p>
          </div>
          <a 
            href="#" 
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold tracking-tight transition-opacity flex items-center gap-2 whitespace-nowrap"
          >
            <Instagram className="w-5 h-5" />
            @bufn.yakuplu
          </a>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-5xl font-black italic serif uppercase tracking-tighter text-[#F5F5F0] mb-2">BÜF'N</h3>
            <p className="text-[#FFBF00] font-bold mb-6 uppercase tracking-widest text-[10px]">
              Yeni Nesil Büfe • Sokak Lezzetleri
            </p>
            <p className="text-white/70 max-w-sm text-sm">
              Beylikdüzü ve Yakuplu'nun en sevilen sokak lezzetleri noktası. İyi malzeme, hızlı servis, kaliteli hizmet.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/30 font-black mb-4 uppercase tracking-widest text-[10px]">İletişim</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="font-bold leading-tight">İnmarı Sitesi, Marmara Mah. Avrasya Cd. No:2, 34524 Beylikdüzü / İstanbul</li>
              <li>
                <a href="tel:05337154042" className="hover:text-white transition-colors font-bold text-[#FFBF00]">0533 715 40 42</a>
              </li>
              <li>
                <span className="text-[#F5F5F0] font-bold">Her Gün <span className="text-emerald-400">02:00'ye</span> Kadar Açık</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 font-black mb-4 uppercase tracking-widest text-[10px]">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 text-white/70 font-bold text-sm">
              <li><a href="#" className="hover:text-[#FFBF00] transition-colors">Ana Sayfa</a></li>
              <li><a href="#menu" className="hover:text-[#FFBF00] transition-colors">Menü</a></li>
              <li><a href="#favorites" className="hover:text-[#FFBF00] transition-colors">Favoriler</a></li>
              <li><a href="#location" className="hover:text-[#FFBF00] transition-colors">İletişim</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BÜF'N. Tüm hakları saklıdır.
          </p>
          <div className="text-white/30 text-xs font-bold uppercase tracking-widest">
             Made with <span className="text-[#FFBF00]">♥</span> in Istanbul
          </div>
        </div>
      </div>
    </footer>
  );
}
