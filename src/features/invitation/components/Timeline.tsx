import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const Timeline = () => {
  const events = [
    { time: '17:00', title: 'Acción de Gracias', desc: 'Santuario del Espíritu Santo' },
    { time: '19:30', title: 'Cruza el Ropero', desc: 'Recepción en el Gran Salón' },
    { time: '21:00', title: 'Brindis y Vals', desc: 'Momento mágico en la pista' },
    { time: '22:30', title: 'Gran Baile', desc: 'Celebración en todo el reino' },
  ];

  return (
    <section className="py-20 px-6 bg-[#FFFDF5]">
      <h2 className={`${playfair.className} text-3xl text-center mb-16 text-amber-900 tracking-widest uppercase`}>
        Itinerario del Gran Día
      </h2>
      <div className="max-w-xl mx-auto space-y-12 relative border-l border-amber-200 ml-4 md:ml-auto">
        {events.map((ev, i) => (
          <div key={i} className="relative pl-8" data-aos="fade-left" data-aos-delay={i * 100}>
            <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-amber-800 border-4 border-[#FFFDF5]" />
            <span className="text-sm font-bold text-amber-700/60 tracking-tighter">{ev.time}</span>
            <h4 className={`${playfair.className} text-xl text-amber-900 font-bold`}>{ev.title}</h4>
            <p className="text-stone-500 text-sm italic">{ev.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};