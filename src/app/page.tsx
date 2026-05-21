import Hero from "@/components/sections/hero";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionThree from "@/components/sections/section-three";
import SectionFour from "@/components/sections/section-four";
import SectionFive from "@/components/sections/section-five";
import SectionSix from "@/components/sections/section-six";
import SectionSeven from "@/components/sections/section-seven";
// import SectionEight from "@/components/sections/section-eight";

function Home() {
  return (
    <>
      <Hero />
      {/* <SectionEight /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}

export default Home;
