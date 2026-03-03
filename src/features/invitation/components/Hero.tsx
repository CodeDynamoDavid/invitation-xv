import { Alex_Brush, Playfair_Display } from "next/font/google";
import { VALERIA_DATA } from "../../../data/content";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center p-6 bg-[#FFFDF5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none border-8 border-amber-900 m-4 md:m-8" />

      <div data-aos="fade-down" className="z-10">
        <span className={`${playfair.className} uppercase tracking-[0.5em] text-xs mb-4 text-amber-800/60 block`}>
          Bienvenidos a la Crónica de
        </span>
        <h1 className={`${alexBrush.className} text-7xl md:text-9xl text-amber-900 mb-2`}>
          Mis XV Años
        </h1>
        <h2 className={`${playfair.className} text-2xl md:text-3xl tracking-widest text-amber-800/80 uppercase mt-4`}>
          {VALERIA_DATA.name}
        </h2>
      </div>

      <div className="mt-12 w-px h-24 bg-linear-to-b from-amber-800/40 to-transparent animate-pulse" />
    </section>
  );
};