'use client';
import { Playfair_Display } from "next/font/google";
import {
  Favorite,
  Church,
  AutoAwesome,
  Celebration,
  MusicNote
} from "@mui/icons-material";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const Timeline = () => {
  const events = [
    {
      time: '17:00',
      title: 'Acción de Gracias',
      desc: 'Santuario del Espíritu Santo',
      icon: <Church sx={{ fontSize: 30 }} />
    },
    {
      time: '19:30',
      title: 'Cruza el Ropero',
      desc: 'Recepción en el Gran Salón',
      icon: <AutoAwesome sx={{ fontSize: 30 }} />
    },
    {
      time: '21:00',
      title: 'Brindis y Vals',
      desc: 'Momento mágico en la pista',
      icon: <MusicNote sx={{ fontSize: 30 }} />
    },
    {
      time: '22:30',
      title: 'Gran Baile',
      desc: 'Celebración en todo el reino',
      icon: <Celebration sx={{ fontSize: 30 }} />
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#FFFDF5] overflow-hidden">
      <h2 className={`${playfair.className} text-3xl md:text-4xl text-center mb-32 text-amber-900 italic uppercase tracking-widest`}>
        Itinerario del Gran Día
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-amber-200 z-0" />

        <div className="space-y-20">
          {events.map((ev, i) => {
            const textAtRight = i % 2 === 0;

            return (
              <div key={i} className="relative flex items-center justify-center w-full">

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 bg-[#FFFDF5] py-2">
                  <Favorite
                    className="text-amber-500 animate-pulse-slow"
                    sx={{ fontSize: 16 }}
                  />
                </div>

                <div className="flex w-full items-center">

                  <div className="w-1/2 flex justify-end px-8 md:px-12">
                    {textAtRight ? (
                      <div className="text-amber-600/60" data-aos="fade-right">
                        {ev.icon}
                      </div>
                    ) : (
                      <div className="text-right flex flex-col items-end" data-aos="fade-right">
                        <h4 className={`${playfair.className} text-xl md:text-2xl text-amber-950 uppercase tracking-tight`}>
                          {ev.title}
                        </h4>
                        <div className="w-12 h-px bg-amber-300 my-2" />
                        <p className="text-sm font-bold text-amber-800/60 tracking-[0.3em]">
                          {ev.time}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-1/2 flex justify-start px-8 md:px-12">
                    {textAtRight ? (
                      <div className="text-left flex flex-col items-start" data-aos="fade-left">
                        <h4 className={`${playfair.className} text-xl md:text-2xl text-amber-950 uppercase tracking-tight`}>
                          {ev.title}
                        </h4>
                        <div className="w-12 h-px bg-amber-300 my-2" />
                        <p className="text-sm font-bold text-amber-800/60 tracking-[0.3em]">
                          {ev.time}
                        </p>
                      </div>
                    ) : (
                      <div className="text-amber-600/60" data-aos="fade-left">
                        {ev.icon}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};