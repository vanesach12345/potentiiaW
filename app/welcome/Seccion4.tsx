export const Seccion4 = () => {
    return (
      <section className="bg-[#E0467A] w-full min-h-screen md:min-h-[559px] px-4 text-white relative overflow-hidden flex items-center justify-center">

     
      <img 
        src="public/Line 1.png" 
        alt="Decoración izquierda"
        className="absolute top-[-50px] left-[-50px] w-[250px] h-auto z-0"
      />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="w-full mb-12 sm:mb-16 md:mb-24 lg:mb-32 px-4">
          <h1 className="font-oswald font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[46px] uppercase">
            NUESTROS CURSOS DE FORMACIÓN PARA EL DESARROLLO PROFESIONAL OBTIENEN EXCELENTES RESULTADOS
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-12 md:gap-6 lg:gap-12 xl:gap-24">

          <div className="flex flex-col items-center w-full max-w-[245px]">
            <span className="font-bold text-3xl sm:text-4xl md:text-[48px] leading-[1.2]">+ 4,000</span>
            <span className="text-lg sm:text-xl md:text-2xl text-center mt-2 md:mt-4">Horas de coaching</span>
          </div>
          
          <div className="flex flex-col items-center w-full max-w-[245px]">
            <span className="font-bold text-3xl sm:text-4xl md:text-[48px] leading-[1.2]">+ 160</span>
            <span className="text-lg sm:text-xl md:text-2xl text-center mt-2 md:mt-4">Compañías</span>
          </div>

          <div className="flex flex-col items-center w-full max-w-[279px]">
            <span className="font-bold text-3xl sm:text-4xl md:text-[48px] leading-[1.2]">+ 10,000</span>
            <span className="text-lg sm:text-xl md:text-2xl text-center mt-2 md:mt-4">Personas entrenadas</span>
          </div>
        </div>
      </div>

      
      <img 
        src="public/Line 2.png"
        alt="Decoración derecha"
        className="absolute bottom-0 right-[-40px] w-[290px] h-auto z-0"
      />
    </section>
    );
};