import Image from "next/image";
import {
  s2_left_hand,
  s2_right_hand,
  s2_mobile,
  greencheck_s2,
} from "@/assets/images";
import { slideInLeft, slideInRight, springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";

function SectionTwo() {
  return (
    <section className="relative w-full -screen overflow-hidden xl:hidden bg-[#286744]">
      <Image
        src={greencheck_s2}
        alt="check"
        className="absolute -top-15 right-40 sm:right-10 sm:top-0 object-cover object-top scale-[1.5] sm:scale-[1] sm:w-full z-0"
        priority
      />

      <div className="mt-22 mr-4">
        <MotionWrapper variants={slideInRight} delay={0.2}>
          <Typography
            as="h1"
            font="heading"
            size="display-lg"
            color="lime"
            align="right"
            className="mb-1"
          >
            Everything
            <br />
            you earn,
            <br />
            <span className="text-white">
              instantly <br /> accessible
            </span>
          </Typography>
        </MotionWrapper>
        <MotionWrapper variants={slideInRight} delay={0.5}>
          <Typography
            font="lato"
            size="display-sm"
            color={"off-white"}
            align="right"
            weight={"regular"}
          >
            Your global wealth <br className="hidden sm:flex" /> in your pocket
          </Typography>
        </MotionWrapper>
      </div>

      <div className="w-full flex items-center justify-between -mt-25 sm:-mt-58">
        <MotionWrapper
          variants={slideInLeft}
          delay={0.7}
          className="w-[70%] h-full overflow-hidden sm:w-[60%] z-30"
        >
          <Image
            src={s2_left_hand}
            alt=""
            className="w-full h-full object-cover scale-110 sm:scale-100"
          />
        </MotionWrapper>

        <MotionWrapper variants={slideInRight} delay={0.9} className="w-[30%]">
          <Image
            src={s2_right_hand}
            alt=""
            className="w-full h-auto object-cover"
          />
        </MotionWrapper>
      </div>

      <MotionWrapper
        variants={springUp}
        delay={0.4}
        className="absolute bottom-0 right-0 sm:-bottom-20 sm:left-1/2 sm:-translate-x-1/2 w-[40%] h-auto sm:w-[50%] z-40"
      >
        <Image src={s2_mobile} alt="" className="w-full h-auto object-cover" />
      </MotionWrapper>
    </section>
  );
}

export default SectionTwo;
