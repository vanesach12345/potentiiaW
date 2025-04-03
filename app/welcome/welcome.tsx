import { Banner } from "./Banner";
import  Carrusell  from "./Carrusell";
import { Hero } from "./Hero";
import { Secccion1 } from "./Seccion1";

export function Welcome() {
  return (
    <main>
      <Banner/>
      <Hero />
      <Secccion1 />
      <Carrusell/>
    </main>
  );
}