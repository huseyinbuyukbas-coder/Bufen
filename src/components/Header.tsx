export function Header() {
  return (
    <header className='flex justify-between items-center px-4 md:px-10 py-6 border-b border-white/10 shrink-0 bg-[#0F0F0F] z-50 relative'>
      <div className='flex items-center gap-4'>
        <span className='text-3xl font-black tracking-tighter text-[#FFBF00] italic serif uppercase'>BÜF'N</span>
        <div className='hidden md:block h-4 w-px bg-white/20 mx-2'></div>
        <span className='hidden md:inline text-[10px] uppercase tracking-widest text-white/50 font-bold'>Yeni Nesil Büfe • Sokak Lezzetleri</span>
      </div>
      <div className='flex items-center gap-4 md:gap-8'>
        <div className='hidden md:flex flex-col items-end'>
          <span className='text-[10px] text-white/40 uppercase font-bold tracking-widest'>Durum</span>
          <span className='text-xs font-semibold text-emerald-400 flex items-center gap-1.5'>
            <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span> 
            HER GÜN 02:00'YE KADAR AÇIK
          </span>
        </div>
        <a href="#order" className='bg-[#FFBF00] text-black px-4 py-2 rounded-full text-xs font-black tracking-wide hover:bg-white transition-colors'>
          SİPARİŞ VER
        </a>
      </div>
    </header>
  );
}
