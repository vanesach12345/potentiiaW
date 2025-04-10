export const Seccion5 = () => {
    return (
      <section className="bg-white py-16 px-4 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              CONOCE A PIIA: NUESTRA ENTRENADORA DIGITAL DE ALTO RENDIMIENTO SOSTENIBLE
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Una serie de protocolos de entrenamiento prácticos, sostenibles y escalables, que te dan el poder de optimizar tu salud, bienestar y rendimiento.
            </p>
          </div>
          <div className="relative w-full max-w-10xl mx- p-4">
              
              <img src="public/Img7.png" alt="Fondo" className="w-full rounded-lg" />

              <img 
                src="public/img9.png" 
                alt="Piia Entrenadora" 
                className="absolute left-55 bottom-20  rounded-full" 
              />

             
              <img 
                src="public/img8.png" 
                alt="Luisa Futbolista" 
                className="absolute right-10 top-10  rounded-full" 
              />
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="public/Grafica.png" alt="" />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
              </p>
            </div>
  
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="public/Grafica.png" alt="" />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
              </p>
            </div>
  
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="public/Pestañas.png" alt="Grafica " />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
              </p>
            </div>
  
        
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src="public/Pestañas.png" alt="" />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">PROGRAMAS PERSONALIZADOS</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Dolor en eaere ut enim ad minimis. Mi libero id is piena potenti. Mi libero id is piena potenti.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };