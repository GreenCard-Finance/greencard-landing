import React from "react";
import Image from "next/image";
import {
  section_2_bg,
  s2_left_hand,
  s2_right_hand,
  s2_mobile,
} from "@/assets/images";

function SectionTwo() {
  return (
    <section
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${section_2_bg.src})` }}
    >
      <div className="flex flex-col gap-8 h-full"> </div>
    </section>
  );
}

export default SectionTwo;
