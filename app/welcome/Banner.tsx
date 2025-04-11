import { PrimaryButton } from "./Hero";

export const Banner = () =>{
    return(
        <section className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between mx-auto max-w-7xl px-4 py-8">
      <div className="w-36 md:w-44 lg:w-[179px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/8087/6796/ad3d7cfdce98678017ecabf65df3461d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfHMg-pXwOpnhiIqxCDG-oAHCBe4ENjWBPrW3LZ1EkJ-zfA47QWNoJaiRY6C~yKrLsogktU~BOrXnhNq0p32ImptV9Isy2kqy0pQ6cgzZLVLAP415aDgFP6RAZ1TfE1Zd0gdRrJlTZE7~DSQoLnhEbE2v6B3GonPSqpwFugIYO9pJY6TDXSUcDE6f7u2l-RQcdVVjt3tInKLIzId9XI5-6qr5weny7O1b4vGOFtGIPqUd-ojj8D6z8HBGPf~ZFwwXchsAoGUbRNKrX-On6sRgGwGIlc8ysF62GSXQX4sm4xUydN567mAHL0O2rKbMgK0MZYGzDUWsSZCHVr0VJMGdw__"
          className="h-full w-full object-contain"
          alt="Logo"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 text-black font-semibold text-base md:text-lg lg:text-xl text-center md:text-right items-center md:justify-end w-full">
        <p>Programas Corporativos</p>
        <p>Programas Deportivos</p>
        <p>Modelo Potentiia</p>
        <p>Piia Entrenadora Digital</p>

        <div className="mt-4 md:mt-0">
          <PrimaryButton text="Contáctonos" />
        </div>
      </div>
    </section>

    );
};
