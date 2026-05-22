import SectionFive from "@/components/sections/section-five";
import SectionFour from "@/components/sections/section-four";
import SectionSeven from "@/components/sections/section-seven";
import SessionSix from "@/components/sections/section-six";
import SectionThree from "@/components/sections/section-three";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionEight from "@/components/sections/section-eight";
import Hero from "@/components/sections/hero";

function Home() {
  return (
    <>
      <Hero />
      <SectionEight />
      <SectionThree />
      <SectionOne />
      <SectionTwo />

      <SectionFour />
      <SectionFive />
      <SessionSix />
      <SectionSeven />
    </>
  );
}

export default Home;
