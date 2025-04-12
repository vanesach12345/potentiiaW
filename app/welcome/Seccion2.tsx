import { PrimaryButton } from "./Hero";

export const Seccion2 = () => {
    return (
        <section className="bg-[#123337] flex flex-col items-center mx-auto max-w-full min-h-[0vh] py-[120px] px-4 text-white relative">
            
            <div className="text-center max-w-2xl mb-12">
                <h1 className="font-Oswald font-semibold text-2xl md:text-4xl leading-snug md:leading-[64px] uppercase mb-6">
                    ¿TAMBIÉN SIENTES QUE EL MUNDO AVANZA MÁS RÁPIDO QUE TÚ?
                </h1>
                <p className="mt-4 text-sm md:text-lg mb-4 text-white/70">
                    No estás solo, el 70% de las personas económicamente activas en México se sienten exactamente igual atravesando una crisis de burnout porque su rendimiento no crece a la velocidad del mundo hiperproductivo.
                </p>
                <p className="text-sm md:text-lg text-white/70">
                    Gracias al deporte entendimos los retos del desarrollo humano actual
                </p>
            </div>
       
            <div className="flex flex-col lg:flex-row items-start justify-between w-full mt-6 relative -mx-4">
               
                <div className="w-1/2 flex flex-col justify-items-start hidden lg:flex">
                    <h2 className="text-2xl font-bold mb-10 text-stard">ALTO RENDIMIENTO DEPORTIVO</h2>
                    <img src="public/img6.png" className="w-full h-auto object-cover rounded-xl" alt="Atleta" />
                </div>
                
                <div className="w-full max-w-[700px] px-4 mx-auto">
                    <div className="space-y-0.5">

                        <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                            <div className="p-4 text-center font-semibold text-[#123337] bg-[#DFF4F3]">
                                Metas altas y ambiciosas
                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                            <div className="p-4 text-center font-semibold text-[#123337] bg-[#DFF4F3]">
                                Altas expectativas por mantener el mejor rendimiento
                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                            <div className="p-4 text-center font-semibold text-[#123337] bg-[#DFF4F3]">
                                Altos niveles de estrés y cansancio
                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                            <div className="p-4 text-center font-semibold text-[#123337] bg-[#DFF4F3]">
                                Toma de decisiones bajo presión
                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 divide-x-4 divide-solid divide-[#DFF4F3] bg-Gray bg-opacity-10 rounded-[20px] border border-white border-opacity-20">
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                            <div className="p-4 text-center font-semibold text-[#123337] bg-[#DFF4F3]">
                                Trabajo en equipo eficiente para lograr las metas
                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <img src="public/Vector.png" className="w-6 h-6" />
                            </div>
                        </div>

                    </div>
                </div>
              
                <div className="w-1/2 flex flex-col img-justify-items-end hidden lg:flex">
                    <h2 className="text-2xl font-bold mb-6 text-center">ALTO RENDIMIENTO EMPRESARIAL</h2>
                    <img src="public/img5.png" className="w-full h-auto object-cover rounded-xl" alt="Mujer empresaria" />
                </div>  
            </div> 

            <div className="mt-6">
                <PrimaryButton text="Descargar guía para la gestión del estrés"/>
            </div>
        </section>
    );
};