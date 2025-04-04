import { Banner } from "./Banner";
import { Hero } from "./Hero";
import { Secccion1 } from "./Seccion1";
import { Carrusell } from "./Carrusell";
import { Seccion2 } from "./Seccion2";
import { CardSeccion3 } from "./CardSeccion3";

export function Welcome() {
  return (
    <main>
      <Banner/>
      <Hero />
      <Secccion1 />
      <Carrusell/>
      <Seccion2/>
      <CardSeccion3/>
    </main>
  );
}