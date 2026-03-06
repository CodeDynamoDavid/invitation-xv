'use client';
import Image from "next/image";
import { useCountdown } from "../hooks/useCountdown";
import { VALERIA_DATA } from "../../../data/content";
import { Playfair_Display, Montserrat } from "next/font/google";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "600"] });

export const Countdown = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(VALERIA_DATA.event.fullDateISO);

  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const eventDay = 21;

  if (isExpired) {
    return (
      <section className="py-20 text-center bg-[#FAF7ED]">
        <p className={`${playfair.className} text-3xl text-amber-900 animate-pulse`}>
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
    <section className="w-full flex flex-col overflow-hidden">
      
      {/* 1. SECCIÓN CALENDARIO (FONDO MAPA VINTAGE) */}
      <div className="relative py-16 flex flex-col items-center overflow-hidden min-h-137.5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/calendario.jpeg" // Tu nueva imagen del mapa
            alt="Fondo Mapa Vintage"
            fill
            className="object-cover"
          />
          {/* Opacidad suave color crema para unificar el texto con el mapa */}
          <div className="absolute inset-0 bg-[#f4e9d6]/30" /> 
        </div>

        <div className="relative z-10 flex flex-col items-center" data-aos="fade-up">
          <h4 className={`${playfair.className} text-4xl text-[#5d4037] uppercase tracking-[0.4em] mb-12 font-medium`}>
            Marzo
          </h4>

          <div className="grid grid-cols-7 gap-3 md:gap-5 text-center items-center">
            {daysOfWeek.map((d, i) => (
              <span key={`dayname-${i}`} className="text-[12px] font-bold text-[#8d6e63]">
                {d}
              </span>
            ))}

            {daysInMonth.map(day => (
              <div key={`daynum-${day}`} className="relative w-10 h-10 flex items-center justify-center">
                {day === eventDay ? (
                  <div className="relative flex items-center justify-center">
                    {/* Tiara sobre el número 21 */}
                    <div className="absolute -top-7 z-20 w-12 h-12 flex justify-center">
                      <Image
                        src="/tiaras.png"
                        alt="Tiara"
                        width={50}
                        height={50}
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    {/* Círculo del evento en un tono óxido/ámbar que combine con el mapa */}
                    <div className="w-10 h-10 rounded-full absolute bg-[#bf360c] shadow-lg" />
                    <span className="font-bold text-white z-10 relative text-lg">
                      {day}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#3e2723] font-medium text-base">
                    {day}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN CONTADOR (FONDO BOSQUE/ROPERO) */}
      <div className="relative py-24 flex justify-center w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mes2.jpg" // Tu imagen del bosque
            alt="Fondo Bosque Mágico"
            fill
            className="object-cover"
          />
          {/* Overlay oscuro degradado para que el centro brille más que los bordes */}
          <div className="absolute inset-0 bg-black/40" /> 
        </div>

        <div className="relative z-10 flex items-center justify-center gap-2 md:gap-6" data-aos="zoom-in">
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex items-center">
              <div className="flex flex-col items-center min-w-21.25 md:min-w-35">
                {/* Texto blanco con sombra fuerte para separar de la nieve blanca */}
                <span className={`${playfair.className} text-6xl md:text-9xl text-white font-extralight tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}>
                  {String(block.value).padStart(2, '0')}
                </span>
                {/* Etiquetas en dorado suave para resaltar sobre el fondo oscuro */}
                <span className={`${montserrat.className} mt-4 text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-amber-200 font-bold`}>
                  {block.label}
                </span>
              </div>

              {index !== timeBlocks.length - 1 && (
                <div className="flex flex-col gap-3 mx-1 md:mx-4 pt-2 md:pt-4">
                  <FiberManualRecordIcon sx={{ fontSize: { xs: 8, md: 10 } }} className="text-amber-200/40" />
                  <FiberManualRecordIcon sx={{ fontSize: { xs: 8, md: 10 } }} className="text-amber-200/40" />
                  <div className="h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};