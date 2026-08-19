import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { InfoBar } from "./components/InfoBar";
import { Favorites } from "./components/Favorites";
import { Features } from "./components/Features";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Atmosphere } from "./components/Atmosphere";
import { NightFlavors } from "./components/NightFlavors";
import { Menu } from "./components/Menu";
import { Order } from "./components/Order";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { MobileNav } from "./components/MobileNav";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#F5F5F0] font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <InfoBar />
      <Favorites />
      <Features />
      <Reviews />
      <Gallery />
      <Atmosphere />
      <NightFlavors />
      <Menu />
      <Order />
      <Location />
      <Footer />
      <MobileNav />
    </main>
  );
}
