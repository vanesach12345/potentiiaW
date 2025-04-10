import { PrimaryButton } from "./Hero";
import { PrimaryButton1 } from "./Hero";

export const Seccion8 = () =>{
    return(
      <section className="flex items-center place-content-evenly p-40">
      <div className="max-w-2xl">
        <h2 className="text-[30px] font-extrabold mb-6 ">
          ESTAMOS CAMBIANDO LA FORMA EN QUE <br />
          TRABAJAN LOS FUTUROS LÍDERES HOY
        </h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur. Eleifend sit vivamus dolor
          viverra donec faucibus risus libero. Feugiat aliquam in eu pharetra
          in rutrum augue massa amet. Feugiat aliquam in eu pharetra in rutrum
          augue massa amet.
        </p>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur. Eleifend sit vivamus dolor
          viverra donec faucibus risus libero. Feugiat aliquam in eu pharetra.
        </p>
        <div className="flex gap-4">
          <PrimaryButton text="Contáctanos" />
          <PrimaryButton1 text="Agendar llamada" />
        </div>
      </div>

      <div className="relative ml-auto mr-0 w-fit ">
        <img
          className="max-w-sm w-full"
          src="public/Img10.png"
          alt="Persona con íconos"
        />

        <div className="absolute top-4 left-4 bg-white shadow-md rounded-full px-6 py-4 flex items-center gap-2 text-sm font-semibold">
          <span role="img" aria-label="mano">👋</span> MIRNA
        </div>

        <div className="absolute bottom-40 right-6 bg-white shadow-lg rounded-2xl px-6 py-4 text-center">
          <p className="text-xs text-Raspberry  ">Meetings</p>
          <p className="text-xl font-bold">20</p>
          <p className="text-xs text-gray-500">minutos</p>
        </div>
      </div>
    </section>
  
    );
};