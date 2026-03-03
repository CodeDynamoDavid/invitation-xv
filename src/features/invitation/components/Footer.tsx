export const Footer = () => {
  return (
    <footer className="py-16 bg-[#FFFDF5] text-center border-t border-amber-100">
      <div className="max-w-xs mx-auto space-y-4">
        <p className="font-serif text-amber-900 italic text-lg">
          "Gracias por ser parte de mi cuento de hadas."
        </p>
        <div className="flex justify-center items-center space-x-2">
           <div className="h-px w-8 bg-amber-200" />
           <span className="text-[10px] text-amber-800/40 uppercase tracking-[0.3em]">Valeria Illary</span>
           <div className="h-px w-8 bg-amber-200" />
        </div>
        <p className="text-[9px] text-stone-400 uppercase tracking-widest pt-4">
          Hecho con cariño para mis XV años
        </p>
      </div>
    </footer>
  );
};