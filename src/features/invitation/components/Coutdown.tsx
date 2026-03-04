'use client';
import Image from "next/image";
import { useCountdown } from "../hooks/useCountdown";
import { VALERIA_DATA } from "../../../data/content";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const Countdown = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(VALERIA_DATA.event.fullDateISO);

  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startEmptyDays = 0;
  const eventDay = 21;

  if (isExpired) {
    return (
      <section className="py-10 text-center">
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
    <section className="py-20 w-full flex flex-col items-center overflow-hidden bg-transparent">

      <div className="mb-16 flex flex-col items-center" data-aos="fade-up">
        <h4 className={`${playfair.className} text-2xl text-amber-900 uppercase tracking-widest mb-10`}>
          Marzo
        </h4>

        <div className="grid grid-cols-7 gap-3 md:gap-5 text-center items-center">
          {daysOfWeek.map((d, i) => (
            <span key={`dayname-${i}`} className="text-[10px] font-bold text-amber-800/40">
              {d}
            </span>
          ))}

          {Array(startEmptyDays).fill(null).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {daysInMonth.map(day => (
            <div key={`daynum-${day}`} className="relative w-10 h-10 flex items-center justify-center">
              {day === eventDay ? (
                <div className="relative flex items-center justify-center">
                  <div className="absolute -top-6 z-20 w-12 h-12 flex justify-center pointer-events-none">
                    <Image
                      src="/tiaras.png"
                      alt="Tiara"
                      width={48}
                      height={48}
                      className="object-contain drop-shadow-md transition-transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="w-9 h-9 border border-amber-400 rounded-full absolute bg-amber-50 shadow-sm" />
                  <span className="font-bold text-amber-950 z-10 relative text-base">
                    {day}
                  </span>
                </div>
              ) : (
                <span className="text-stone-400 font-light text-sm italic opacity-60">
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#FAF7ED] py-12 flex justify-center">
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap" data-aos="zoom-in">
          {timeBlocks.map((block) => (
            <div key={block.label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 border border-amber-200/40 rounded-full flex items-center justify-center bg-white shadow-sm">
                <span className="text-xl md:text-2xl font-serif text-amber-950 leading-none">
                  {String(block.value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-3 text-[9px] uppercase tracking-[0.2em] text-amber-800/60 font-medium">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};