import { Banner } from "./Banner";
import { Hero } from "./Hero";
import { Secccion1 } from "./Seccion1";
import { Carrusell } from "./Carrusell";
import { Seccion2 } from "./Seccion2";
import { Seccion4 } from "./Seccion4";
import { Seccion5 } from "./Seccion5";
import { Seccion6 } from "./Seccion6";
import { CardSeccion3 } from "./CardSeccion3";
import { CarrusellSeccion7 } from "./CarrusellSeccion7";
import { Seccion8 } from "./Seccion8";
import { Seccion9Ultima } from "./Seccion9Ultima";

export function Welcome() {
  return (
    <main>
      <Banner/>
      <Hero />
      <Secccion1 />
      <Carrusell/>
      <Seccion2/>
      <CardSeccion3/>
      <Seccion4/>
      <Seccion5/>
      <Seccion6/>
      <CarrusellSeccion7/>
      <Seccion8/>
      <Seccion9Ultima/>
      
    </main>
  );
}