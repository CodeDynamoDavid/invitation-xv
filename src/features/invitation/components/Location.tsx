import Image from "next/image";
import { VALERIA_DATA } from "../../../data/content";

export const Location = () => {
  const { event } = VALERIA_DATA;
  
  return (
    <section className="py-24 px-6 bg-[#FAF7ED]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        <div 
          className="bg-white shadow-2xl overflow-hidden rounded-lg flex flex-col border border-amber-100 group" 
          data-aos="fade-up"
        >
          <div className="relative w-full h-56 md:h-64 overflow-hidden">
            <Image 
              src="/goku.jpg" 
              alt="Iglesia Cristo Rey" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </div>

          <div className="p-8 text-center flex-1 flex flex-col items-center">
            <h3 className="text-3xl font-serif text-amber-950 mb-3 italic">
              Ceremonia Religiosa
            </h3>
            <p className="text-stone-600 mb-2 font-medium leading-relaxed">
              {event.church}
            </p>
            <p className="text-xs font-bold text-amber-800/60 uppercase tracking-widest mb-6">
              {event.churchLocation}
            </p>
            
            <div className="mt-auto pt-6 border-t border-amber-100 w-full">
              <span className="text-xs uppercase tracking-widest text-stone-400 block mb-1">Hora:</span>
              <p className="text-3xl font-serif text-amber-900">{event.churchTime}</p>
            </div>
          </div>
        </div>

        <div 
          className="bg-white shadow-2xl overflow-hidden rounded-lg flex flex-col border border-amber-100 group" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <div className="relative w-full h-56 md:h-64 overflow-hidden">
            <Image 
              src="/goku.jpg" 
              alt="Palacio El Rey" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </div>

          <div className="p-8 text-center flex-1 flex flex-col items-center">
            <h3 className="text-3xl font-serif text-amber-950 mb-3 italic">
              Recepción
            </h3>
            <p className="text-stone-600 mb-2 font-medium leading-relaxed">
              {event.salon}
            </p>
            <p className="text-[10px] text-stone-400 mb-6 uppercase tracking-widest leading-tight px-4">
              {event.salonAddress}
            </p>

            <div className="mt-auto pt-6 border-t border-amber-100 w-full">
              <span className="text-xs uppercase tracking-widest text-stone-400 block mb-1">Inicia:</span>
              <p className="text-3xl font-serif text-amber-900">{event.receptionTime}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};