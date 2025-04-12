export const Seccion5 = () => { 
  return (
    <section className="bg-white py-16 px-4 md:py-24 lg:py-32 max-w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CONOCE A PIIA: NUESTRA ENTRENADORA DIGITAL DE ALTO RENDIMIENTO SOSTENIBLE
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Una serie de protocolos de entrenamiento prácticos, sostenibles y escalables, que te dan el poder de optimizar tu salud, bienestar y rendimiento.
          </p>
        </div>

        <div className="relative w-full max-w-10xl mx-auto p-4">
          <img src="public/Img7.png" alt="Fondo" className="w-full rounded-lg" />

          <img 
            src="public/img9.png" 
            alt="" 
            className="absolute left-10 bottom-10 md:left-55 md:bottom-20 w-24 md:w-auto rounded-full transition-all duration-300" 
          />

          <img 
            src="public/img8.png" 
            alt="" 
            className="absolute right-5 top-5 md:right-10 md:top-10 w-24 md:w-auto rounded-full transition-all duration-300" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="public/Grafica.png" alt="" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="public/Grafica.png" alt="" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="public/Pestañas.png" alt="Grafica " />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img src="public/Pestañas.png" alt="" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};