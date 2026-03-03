import { VALERIA_DATA } from "../../../data/content";

export const ParentsInfo = () => {
  return (
    <section className="py-20 px-6 bg-[#FFFDF5] text-center">
      <div className="max-w-3xl mx-auto space-y-16">
        <div data-aos="fade-up">
          <h4 className="text-amber-900/50 uppercase tracking-[0.3em] text-xs mb-6 font-bold">En compañía de mi madre</h4>
          <p className="text-3xl font-serif text-amber-900 italic">{VALERIA_DATA.mother}</p>
        </div>

        <div data-aos="zoom-in" className="relative py-10 px-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-amber-200" />
          <p className="text-stone-500 italic leading-relaxed text-lg font-serif">
            "{VALERIA_DATA.intro}"
          </p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-amber-200" />
        </div>

        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-amber-100 bg-[#FAF7ED]">
            <h4 className="text-amber-800/60 uppercase tracking-widest text-[10px] mb-2 font-bold">Padrino</h4>
            <p className="font-serif text-xl text-amber-950">{VALERIA_DATA.padrinos.padrino}</p>
          </div>
          <div className="p-6 border border-amber-100 bg-[#FAF7ED]">
            <h4 className="text-amber-800/60 uppercase tracking-widest text-[10px] mb-2 font-bold">Madrina</h4>
            <p className="font-serif text-xl text-amber-950">{VALERIA_DATA.padrinos.madrina}</p>
          </div>
        </div>
      </div>
    </section>
  );
};