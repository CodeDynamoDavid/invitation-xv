'use client';
import Image from "next/image";
import { VALERIA_DATA } from "../../../data/content";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const Location = () => {
  const { event } = VALERIA_DATA;

  return (
    <section className="py-24 px-6 bg-[#FAF7ED]">
      <div className="max-w-4xl mx-auto space-y-32">
        
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <h3 className={`${playfair.className} text-4xl md:text-5xl text-amber-900 mb-8 italic`}>
            Ceremonia Religiosa
          </h3>
          
          <div className="relative flex items-center justify-center w-full max-w-xl mb-12">
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-px w-full bg-linear-to-r from-transparent via-amber-200 to-amber-400"></div>
              <div className="h-px w-[80%] self-end bg-linear-to-r from-transparent to-amber-300/50"></div>
            </div>

            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-amber-200 blur-xl opacity-30 animate-pulse"></div>
              <Image 
                src="/tiaras.png" 
                alt="Ornamento" 
                width={50} 
                height={50} 
                className="relative z-10 object-contain brightness-110"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <div className="h-px w-full bg-linear-to-l from-transparent via-amber-200 to-amber-400"></div>
              <div className="h-px w-[80%] self-start bg-linear-to-l from-transparent to-amber-300/50"></div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-2xl font-serif text-amber-950 tracking-wide px-4">
              {event.church}
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-[0.5em] font-light max-w-sm mx-auto leading-loose">
              {event.churchLocation}
            </p>
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-amber-200 mb-4"></div>
              <p className={`${playfair.className} text-5xl text-amber-900`}>
                {event.churchTime}
              </p>
            </div>
          </div>

          <a 
            href={event.churchMapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-4 bg-transparent border-t border-b border-amber-300 text-amber-900 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-amber-50 transition-all duration-500"
          >
            Ver Ubicación
          </a>
        </div>

        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <h3 className={`${playfair.className} text-4xl md:text-5xl text-amber-900 mb-8 italic`}>
            Recepción
          </h3>
          
          <div className="relative flex items-center justify-center w-full max-w-xl mb-12">
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-px w-full bg-linear-to-r from-transparent via-amber-200 to-amber-400"></div>
              <div className="h-px w-[80%] self-end bg-linear-to-r from-transparent to-amber-300/50"></div>
            </div>

            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-amber-200 blur-xl opacity-30 animate-pulse"></div>
              <Image 
                src="/tiaras.png" 
                alt="Ornamento" 
                width={50} 
                height={50} 
                className="relative z-10 object-contain brightness-110"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <div className="h-px w-full bg-linear-to-l from-transparent via-amber-200 to-amber-400"></div>
              <div className="h-px w-[80%] self-start bg-linear-to-l from-transparent to-amber-300/50"></div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-2xl font-serif text-amber-950 tracking-wide px-4">
              {event.salon}
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-[0.5em] font-light max-w-sm mx-auto leading-loose">
              {event.salonAddress}
            </p>
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-amber-200 mb-4"></div>
              <p className={`${playfair.className} text-5xl text-amber-900`}>
                {event.receptionTime}
              </p>
            </div>
          </div>

          <a 
            href={event.salonMapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-4 bg-transparent border-t border-b border-amber-300 text-amber-900 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-amber-50 transition-all duration-500"
          >
            Ver Ubicación
          </a>
        </div>

      </div>
    </section>
  );
};