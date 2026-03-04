'use client';
import Image from "next/image";
import { VALERIA_DATA } from "../../../data/content";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const DressCode = () => {
  return (
    <section className="flex flex-col">
      
      {/* SECCIÓN: CÓDIGO DE VESTIMENTA (Fondo Claro) */}
      <div className="py-24 bg-[#FFFDF5] text-center border-t border-amber-100 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center" data-aos="fade-up">
          <h4 className="text-[12px] font-bold uppercase tracking-[0.6em] text-amber-900/50 mb-4">
            Código de Vestimenta
          </h4>
          <p className={`${playfair.className} text-4xl md:text-5xl text-amber-900 italic mb-10`}>
            {VALERIA_DATA.dressCode}
          </p>
          
          <div className="flex space-x-12">
            <div className="relative w-24 h-24 md:w-32 md:h-32 drop-shadow-md">
              <Image
                src="/terno.png"
                alt="Traje Varones"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 drop-shadow-md">
              <Image
                src="/vestido.png"
                alt="Traje Mujeres"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN: REGALO (Fondo Ámbar - El color del texto anterior ahora es fondo) */}
      <div className="py-24 bg-amber-900 text-center px-6 shadow-inner">
        <div className="max-w-4xl mx-auto flex flex-col items-center" data-aos="fade-up">
          <h4 className="text-[12px] font-bold uppercase tracking-[0.6em] text-amber-200/60 mb-4">
            Sugerencia de Presente
          </h4>
          <p className={`${playfair.className} text-4xl md:text-5xl text-amber-50 italic mb-10`}>
            {VALERIA_DATA.gift}
          </p>
          
          <div className="p-6 rounded-full bg-amber-800/50 border border-amber-700/50 shadow-2xl">
            <RedeemOutlinedIcon sx={{ fontSize: 90, color: '#fef3c7' }} />
          </div>
        </div>
      </div>

    </section>
  );
};