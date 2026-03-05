"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [stage, setStage] = useState<"envelope" | "wardrobe" | "opening" | "flash">("envelope");
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnvelopeClick = () => {
    setStage("wardrobe");

    setTimeout(() => {
      setStage("opening");
      audioRef.current?.play();
    }, 1200);

    setTimeout(() => {
      setStage("flash");
    }, 8500);

    setTimeout(() => {
      router.push("/invitation");
    }, 3500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-center">

      <audio ref={audioRef} src="/door-creak.mp3" preload="auto" />

      {/* ================= SOBRE CON FONDO ================= */}
      {stage === "envelope" && (
        <div className="relative w-full h-screen overflow-hidden">

          {/* 🌌 IMAGEN DE FONDO */}
          <Image
            src="/narnia.png"   // 👈 CAMBIA POR TU IMAGEN
            alt="Fondo Reino"
            fill
            priority
            className="object-cover brightness-75 animate-slowZoom"
          />

          {/* CAPA OSCURA */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENIDO */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">

            <h1 className={`${mainFont.className} text-white/90 text-sm tracking-[0.8em] uppercase mb-14`}>
              Bienvenidos al Reino
            </h1>

            <div
              onClick={handleEnvelopeClick}
              className="cursor-pointer transition-all duration-700 hover:scale-105"
            >
              <Image
                src="/sobrexv2.png"
                alt="Sobre XV"
                width={340}
                height={220}
                className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              />
            </div>

          </div>
        </div>
      )}

      {/* ================= ESCENA CINEMATOGRÁFICA ================= */}
      {(stage === "wardrobe" || stage === "opening" || stage === "flash") && (
        <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden">

          <div
            className={`relative w-250 h-250 transition-all duration-8000 ease-in-out ${
              stage === "opening" ? "scale-[1.5]" : "scale-100"
            }`}
          >

            {/* LUZ PORTAL */}
            {stage !== "wardrobe" && (
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-175 h-225 bg-white blur-[300px] opacity-100 animate-pulse"></div>
              </div>
            )}

            {/* PARTÍCULAS */}
            {stage === "opening" && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.5)_1px,transparent_1px)] bg-size-[30px_30px] animate-[sparkle_4s_linear_infinite]"></div>
              </div>
            )}

            {/* HUMO */}
            {stage === "opening" && (
              <div className="absolute inset-0 z-20 bg-linear-to-t from-white/40 via-white/20 to-transparent blur-[180px] animate-pulse"></div>
            )}

            {/* PUERTAS */}
            <div className="absolute inset-0 flex z-30 overflow-hidden">

              <div
                className={`relative w-1/2 h-full transition-all duration-5000 ease-in-out ${
                  stage === "opening" ? "-translate-x-full" : ""
                }`}
              >
                <Image
                  src="/puerta-izquierdo.png"
                  alt="Puerta izquierda"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className={`relative w-1/2 h-full transition-all duration-5000 ease-in-out ${
                  stage === "opening" ? "translate-x-full" : ""
                }`}
              >
                <Image
                  src="/puerta-derecha.png"
                  alt="Puerta derecha"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      )}

      {/* FLASH FINAL */}
      {stage === "flash" && (
        <div className="absolute inset-0 bg-white animate-fadeWhite z-50"></div>
      )}

      {/* ANIMACIONES */}
      <style jsx global>{`
        @keyframes sparkle {
          from { background-position: 0 0; }
          to { background-position: 0 800px; }
        }

        @keyframes fadeWhite {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }

        .animate-fadeWhite {
          animation: fadeWhite 1.5s forwards;
        }

        .animate-slowZoom {
          animation: slowZoom 20s linear infinite alternate;
        }
      `}</style>

    </main>
  );
}