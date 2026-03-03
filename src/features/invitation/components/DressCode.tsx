import Image from "next/image";
import { VALERIA_DATA } from "../../../data/content";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

export const DressCode = () => {
  return (
    <section className="py-24 bg-[#FFFDF5] text-center border-y border-amber-100">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-24 max-w-6xl mx-auto px-6">

        <div className="flex-1 flex flex-col items-center justify-between" data-aos="fade-up">
          <div className="flex mb-8 space-x-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-sm">
              <Image
                src="/terno.png"
                alt="Traje Varones"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-sm">
              <Image
                src="/vestido.png"
                alt="Traje Mujeres"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-amber-900/40 italic">
              Código de Vestimenta
            </h4>
            <p className="text-3xl md:text-4xl font-serif text-amber-900 italic leading-tight">
              {VALERIA_DATA.dressCode}
            </p>
          </div>
        </div>

        <div className="hidden md:block w-px bg-linear-to-b from-transparent via-amber-200 to-transparent" />

        <div className="flex-1 flex flex-col items-center justify-between" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-8">
            <RedeemOutlinedIcon sx={{ fontSize: 70, color: '#b45309', opacity: 0.8 }} />
          </div>

          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-amber-900/40 italic">
              Sugerencia de Presente
            </h4>
            <p className="text-3xl md:text-4xl font-serif text-amber-900 italic leading-tight">
              {VALERIA_DATA.gift}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};