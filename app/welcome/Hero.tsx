import { text } from "stream/consumers";

export const Hero = () => {
    return (
      <section className="flex gap-20  items-center mx-auto max-w-7xl min-h-[70vh] mt-50" >

        <div className="absolute w-[686px] h-[192px] top-[308px] left-[140px]">
          
          <h1 className="text-5xl font-bold uppercase">
            Llevamos el alto rendimiento sostenible del deporte a tu{" "}
            <span className="text-[#E8BD3C]"> vida</span>
          </h1>
          <p className="mt-6 text-[20px] mb-10">
            Somos la primera empresa en democratizar el verdadero superpoder del
            siglo XXI. La optimización de la salud, el bienestar y el alto
            rendimiento humano a través de programas de entrenamiento prácticos,
            sostenibles y escalables.
          </p>
          <div className="flex gap-6">
            <PrimaryButton text="Explora nuestros programas"/>
            <PrimaryButton1 text="Contáctanos" />
            
          </div>
          
        </div>
        
        <div className="absolute w-[551px] h-[586px] top-[207px] left-[890px]">
          <img className="transition-transform duration-300 ease-in-out hover:rotate-x-15 hover:-rotate-y-30"
          src="public/img4.png" 
          alt="" />
        </div>

      </section>
    );

  };

  interface PrimaryButtonProps {
    text: string;
  }
  
  
  export const PrimaryButton: React.FC<PrimaryButtonProps> = ({text}) => {
    return (
      <button className="text-[#ffffff] bg-[#FF4081] h-12 px-4 rounded-full ">
        {text}
      </button>
    );
  };


  export const PrimaryButton1: React.FC<PrimaryButtonProps> = ({ text }) => {
    return (
      <button className="border-2 border-[#FF4081] text-[#FF4081] h-12 px-6 rounded-full">
        {text}
      </button>

    );
  };