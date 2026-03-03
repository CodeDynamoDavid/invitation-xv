"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Alex_Brush, Playfair_Display, Great_Vibes } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out" });
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      router.push("/invitation");
    }, 1100);
  };

  return (
    <main className="min-h-screen bg-[#FFFDF5] flex flex-col items-center justify-center p-4 overflow-hidden relative">

      <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${isOpen ? "opacity-0" : "opacity-100"}`}>
        <div className="absolute top-0 left-0 w-40 h-40 opacity-20 rotate-180">
          <Image src="/arreglo.png" alt="deco" fill className="object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
          <Image src="/arreglo.png" alt="deco" fill className="object-contain" />
        </div>
      </div>

      <div className={`w-full max-w-md transition-all duration-1000 text-center z-10 ${isOpen ? "opacity-0 -translate-y-10 scale-95" : "opacity-100"}`}>
        <div className="mb-4 text-amber-800/40" data-aos="fade-down">
          <AutoAwesomeOutlinedIcon sx={{ fontSize: 30 }} />
        </div>

        <h1 className={`${mainFont.className} text-amber-900/70 text-sm font-bold tracking-[0.4em] uppercase mb-2`}>
          Estás invitado a vivir la magia
        </h1>

        <h2 className={`${alexBrush.className} text-7xl md:text-8xl text-amber-800 leading-tight mb-2`}>
          Mis XV Años
        </h2>

        <p className={`${mainFont.className} italic text-amber-900/60 text-lg mb-6`}>
          Una aventura inolvidable
        </p>
      </div>

      <div
        className="relative w-[85%] max-w-sm cursor-pointer mt-4 z-10"
        onClick={handleOpenEnvelope}
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <div className={`relative aspect-[4/3] transition-all duration-1000 ${isOpen ? "scale-150 opacity-0 -translate-y-20 rotate-2" : "hover:scale-105"}`}>
          <Image
            src="/sobre.png"
            alt="Sobre"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <button
        onClick={handleOpenEnvelope}
        className={`${mainFont.className} mt-10 animate-pulse text-amber-900/50 tracking-[0.3em] uppercase text-xs font-bold z-10`}
      >
        — Toca para entrar al reino —
      </button>

      <div className="mt-4 text-amber-800/30" data-aos="fade-up">
        <PentagonOutlinedIcon sx={{ fontSize: 15 }} />
      </div>
    </main>
  );
}