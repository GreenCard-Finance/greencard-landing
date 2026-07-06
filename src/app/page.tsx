import Hero from "@/components/sections/hero";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionThree from "@/components/sections/section-three";
import SectionFour from "@/components/sections/section-four";
import SectionFive from "@/components/sections/section-five";
import SectionSix from "@/components/sections/section-six";
import SectionSeven from "@/components/sections/section-seven";
import SectionEight from "@/components/sections/section-eight";
import SectionNine from "@/components/sections/section-nine";
import SectionBlog from "@/components/sections/section-blog";

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
      <SectionBlog />
      <SectionSix />

      <SectionSeven />
      <SectionNine />
    </>
  );
}

export default Home;
