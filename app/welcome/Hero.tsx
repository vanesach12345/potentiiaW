
export const Hero = () => {
    return (
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 gap-10 min-h-[70vh]">
      
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-center lg:text-left">
          Llevamos el alto rendimiento sostenible del deporte a tu{" "}
          <span className="text-[#E8BD3C]">vida</span>
        </h1>
        <p className="mt-6 text-base md:text-lg mb-8 text-center lg:text-left">
          Somos la primera empresa en democratizar el verdadero superpoder del
          siglo XXI. La optimización de la salud, el bienestar y el alto
          rendimiento humano a través de programas de entrenamiento prácticos,
          sostenibles y escalables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <PrimaryButton text="Explora nuestros programas" />
          <PrimaryButton1 text="Contáctanos" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105"
          src="public/img4.png"
          alt="Imagen hero"
        />
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