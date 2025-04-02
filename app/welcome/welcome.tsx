import { Banner } from "./Banner";
import { Carrusell } from "./Carrusell";
import { Hero } from "./Hero";

export function Welcome() {
  return (
    <main>
      <Banner/>
      <Hero />
      <Carrusell />
      
    </main>
  );
}