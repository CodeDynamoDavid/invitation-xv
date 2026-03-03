'use client';
import { useState } from 'react';
import { Playfair_Display, Great_Vibes } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export const Confirmation = () => {
  const [loading, setLoading] = useState(false);

  const TELEFONO = "51953005851"; 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const nombre = formData.get('nombre') as string;

    const mensaje = `¡Hola! Confirmo mi asistencia para los XV de Valeria Illary.%0ANombre: ${nombre}`;
    const whatsappUrl = `https://wa.me/${TELEFONO}?text=${mensaje}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
    }, 500);
  };

  return (
    <section className="py-24 px-6 bg-[#FAF7ED] flex justify-center">
      <div className="max-w-md w-full p-10 bg-white rounded-xl border-2 border-amber-900/20 shadow-2xl relative">
        
        <div className="relative z-10 text-center">
          <h2 className={`${scriptFont.className} text-6xl text-amber-950 mb-4`}>
            Asistencia
          </h2>
          
          <p className={`${mainFont.className} text-amber-900 font-bold text-sm leading-relaxed mb-8 uppercase tracking-widest`}>
            Espero puedas acompañarme <br/> en esta noche mágica
          </p>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="text-left">
              <label 
                htmlFor="nombre"
                className="block text-xs font-bold uppercase tracking-wider text-amber-950 mb-2"
              >
                Escribe tu nombre completo:
              </label>
              <input 
                id="nombre"
                name="nombre" 
                required 
                type="text"
                autoComplete="name"
                className="w-full p-4 bg-[#FFFDF5] border-2 border-amber-800/30 rounded-lg outline-none focus:border-amber-900 text-amber-950 font-medium placeholder:text-stone-400 transition-all shadow-sm" 
                placeholder="Ej. Juan Pérez" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`
                w-full py-5 rounded-lg font-black tracking-[0.2em] uppercase text-sm transition-all duration-300 shadow-md active:scale-95
                ${loading 
                  ? 'bg-stone-200 text-stone-500' 
                  : 'bg-amber-950 text-white hover:bg-[#2D1B0D] hover:shadow-xl'}
              `}
            >
              {loading ? 'Cargando...' : 'Confirmar por WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};