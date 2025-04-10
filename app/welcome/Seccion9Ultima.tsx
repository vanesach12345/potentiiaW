import { PrimaryButton } from "./Hero";

export const Seccion9Ultima = () => {
    return (
        <section className="bg-[#123337] text-white py-10 px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                
                <div>
                    <img
                        className="w-[179px]"
                        src="https://s3-alpha-sig.figma.com/img/1ddc/8149/c014a04f5fb457b756d6bc13fef172ed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GS3hG3ho9pgpMagyaCU3Hm1Yp7~QzUQ59g7tUeNaRHxU4EoIoe9yZAs6b6dvrnAF-5P-AS3CBy8yWqM9bMRaUiUHlZbQMYEl1BGSg0QSUxyZfpaY84db9ZcV-F6kwnMSwDr18DMRUPqpGrFhJ5~SenZoxy-bqFNTdK9A3NWBwDKsjykavzMGIJMeEUF0wpUwwkMhemw5XIB64CgJZC4PKKTRU19rs5uiUndeivsaWFB6GPDh3-877lgPqKoDXqr0SHENKmsM-eEmPlKw2k4YJGKOYmKCb3g02VPfB7j4eBUwMammSrOababGg4sX8okntKbYLPhPgwAFvvBs36Pg3Q__"
                        alt="Potentiia Logo"
                    />
                </div>

                <div>
                    <p className="text-gray-400 mb-2">Potentiia</p>
                    <ul className="space-y-1">
                        <li>Programas</li>
                        <li>PiiA</li>
                        <li>Preguntas frecuentes</li>
                        <li>Términos y condiciones</li>
                        <li>Aviso de privacidad</li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 mb-2">Centro de ayuda</p>
                    <ul className="space-y-1">
                        <li>hola@potentiia.com</li>
                        <li>+52 737 443 44 44</li>
                    </ul>
                </div>

                <div className="flex-1 max-w-sm">
                    <p className="text-gray-400 mb-3">
                        Suscríbete a nuestro newsletter para recibir información sobre nuestros programas
                    </p>
                    <div className="flex bg-[#2a474a] rounded-full overflow-hidden items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                        <PrimaryButton text="Enviar"/>
                    </div>

                    <div className="flex pt-6 ">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#a3a3a3"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>                
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#a3a3a3"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#a3a3a3"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#a3a3a3"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#a3a3a3"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
                    </div>
                </div>

            </div>

            <div className="w-full h-px bg-gray-700 mt-10"></div>

            <p className="text-center text-sm text-gray-400 mt-5">
                Todos los derechos reservados Potentiia® 2025
            </p>
        </section>
    );
};