
export const Hero = () => {
    return (
      <section className=" flex gap-20  items-center mx-auto max-w-7xl min-h-[70vh] " >

        <div className="w-[60%]">
          
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
            <PrimaryButton1 />
            
          </div>
          
        </div>
        <div className="absolute w-[551px] h-[586px] top-[207px] left-[999px]">
          <img src="https://s3-alpha-sig.figma.com/img/8087/6796/ad3d7cfdce98678017ecabf65df3461d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfHMg-pXwOpnhiIqxCDG-oAHCBe4ENjWBPrW3LZ1EkJ-zfA47QWNoJaiRY6C~yKrLsogktU~BOrXnhNq0p32ImptV9Isy2kqy0pQ6cgzZLVLAP415aDgFP6RAZ1TfE1Zd0gdRrJlTZE7~DSQoLnhEbE2v6B3GonPSqpwFugIYO9pJY6TDXSUcDE6f7u2l-RQcdVVjt3tInKLIzId9XI5-6qr5weny7O1b4vGOFtGIPqUd-ojj8D6z8HBGPf~ZFwwXchsAoGUbRNKrX-On6sRgGwGIlc8ysF62GSXQX4sm4xUydN567mAHL0O2rKbMgK0MZYGzDUWsSZCHVr0VJMGdw__" />
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

  export const PrimaryButton1 = () => {
    return (
      <button className="border-2 border-[#FF4081] text-[#FF4081] h-12 px-6 rounded-full">
        Contáctanos
      </button>
    );
  };