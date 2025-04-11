import { PrimaryButton } from "./Hero";
import { PrimaryButton1 } from "./Hero";

export const Seccion8 = () =>{
    return(
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 md:px-20 md:py-40 gap-10">
      <div className="w-full md:max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-snug">
          ESTAMOS CAMBIANDO LA FORMA EN QUE <br />
          TRABAJAN LOS FUTUROS LÍDERES HOY
        </h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Eleifend sit vivamus dolor
          viverra donec faucibus risus libero. Feugiat aliquam in eu pharetra
          in rutrum augue massa amet. Feugiat aliquam in eu pharetra in rutrum
          augue massa amet.
        </p>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Eleifend sit vivamus dolor
          viverra donec faucibus risus libero. Feugiat aliquam in eu pharetra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <PrimaryButton text="Contáctanos" />
          <PrimaryButton1 text="Agendar llamada" />
        </div>
      </div>

      <div className="relative w-full md:w-auto flex justify-center">
        <img
          className="max-w-xs sm:max-w-sm w-full"
          src="public/Img10.png"
          alt="Persona con íconos"
        />

        <div className="absolute top-4 left-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold">
          <span role="img" aria-label="mano">👋</span> MIRNA
        </div>

        <div className="absolute bottom-20 right-4 bg-white shadow-lg rounded-2xl px-5 py-3 text-center text-xs">
          <p className="text-Raspberry font-semibold">Meetings</p>
          <p className="text-lg md:text-xl font-bold">20</p>
          <p className="text-gray-500">minutos</p>
        </div>
      </div>
    </section>
    );
};