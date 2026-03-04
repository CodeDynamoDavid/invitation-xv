'use client';
import { VALERIA_DATA } from "../../../data/content";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const ParentsInfo = () => {
  return (
    <section className="py-20 px-6 bg-[#FFFDF5] text-center">
      <div className="max-w-2xl mx-auto space-y-16">

        <div data-aos="fade-up">
          <h2 className={`${playfair.className} text-3xl md:text-4xl text-amber-900 mb-12 italic`}>
            Con la bendición de mis...
          </h2>
        </div>

        <div data-aos="fade-up" className="space-y-4">
          <h3 className="uppercase tracking-[0.3em] text-xs font-bold text-amber-900/50 mb-4">
            Padres
          </h3>
          <p className={`${playfair.className} text-2xl text-amber-900`}>
            {VALERIA_DATA.mother}
          </p>
        </div>

        <div data-aos="fade-up" className="space-y-4 pt-4">
          <h3 className="uppercase tracking-[0.3em] text-xs font-bold text-amber-900/50 mb-4">
            Padrinos
          </h3>
          <div className="space-y-4">
            <p className={`${playfair.className} text-2xl text-amber-900`}>
              {VALERIA_DATA.padrinos.padrino}
            </p>
            <p className={`${playfair.className} text-2xl text-amber-900`}>
              {VALERIA_DATA.padrinos.madrina}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};