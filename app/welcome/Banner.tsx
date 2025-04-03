import { PrimaryButton } from "./Hero";

export const Banner = () =>{
    return(
        <section className="flex  gap-20 items-center mx-auto max-w-7xl min-h-[20vh]">
            
            <div className="w-[179px] ">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/8087/6796/ad3d7cfdce98678017ecabf65df3461d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfHMg-pXwOpnhiIqxCDG-oAHCBe4ENjWBPrW3LZ1EkJ-zfA47QWNoJaiRY6C~yKrLsogktU~BOrXnhNq0p32ImptV9Isy2kqy0pQ6cgzZLVLAP415aDgFP6RAZ1TfE1Zd0gdRrJlTZE7~DSQoLnhEbE2v6B3GonPSqpwFugIYO9pJY6TDXSUcDE6f7u2l-RQcdVVjt3tInKLIzId9XI5-6qr5weny7O1b4vGOFtGIPqUd-ojj8D6z8HBGPf~ZFwwXchsAoGUbRNKrX-On6sRgGwGIlc8ysF62GSXQX4sm4xUydN567mAHL0O2rKbMgK0MZYGzDUWsSZCHVr0VJMGdw__" 
                    className="h-full"
                />
            </div>    

            <div className="flex gap-4 text-right items-center justfy-end text-black font-semibold text-[20px]">
                <p className="">Programas Corporativos</p>  
                <p>Programas Deportivos</p>  
                <p>Modelo Potentiia</p>
                <p>Piia Entrenadora Digital</p>

                <PrimaryButton text="Contáctonos"/>
            </div>
        </section>

    );
};
