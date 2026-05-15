import Hero from "@/components/sections/hero";
import SectionFive from "@/components/sections/section-five";
import SectionFour from "@/components/sections/section-four";
import SectionSeven from "@/components/sections/section-seven";
import SessionSix from "@/components/sections/section-six";
import SectionThree from "@/components/sections/section-three";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";

function Home() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SessionSix />
      <SectionSeven />
    </>
  );
}

export default Home;
