'use client';
import { useCountdown } from "../hooks/useCountdown";
import { VALERIA_DATA } from "../../../data/content";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const Countdown = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(VALERIA_DATA.event.fullDateISO);

  if (isExpired) {
    return (
      <section className="py-10 bg-[#FAF7ED] text-center">
        <p className={`${playfair.className} text-2xl text-amber-900 animate-pulse`}>
          ¡Hoy es el gran día de Valeria!
        </p>
      </section>
    );
  }

  const timeBlocks = [
    { label: 'Días', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds },
  ];

  return (
    <section className="py-20 w-full bg-[#FAF7ED] flex flex-col items-center shadow-inner overflow-hidden">
      <h3 className={`${playfair.className} mb-10 italic text-amber-900/70 text-xl text-center px-6`} data-aos="fade-up">
        "El tiempo fluye... pronto el reino abrirá sus puertas"
      </h3>

      <div className="flex gap-4 md:gap-8 justify-center flex-wrap" data-aos="zoom-in">
        {timeBlocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 border border-amber-200 rounded-full flex flex-col items-center justify-center bg-white shadow-md relative group">
              <div className="absolute inset-0 rounded-full bg-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-2xl md:text-3xl font-serif text-amber-950 z-10">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>

            <span className="mt-3 text-[10px] uppercase tracking-[0.3em] text-amber-800/60 font-bold">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};