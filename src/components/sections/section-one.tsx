import Image from "next/image";
import {
  s2_left_hand,
  s2_right_hand,
  s2_mobile,
  greencheck_s2,
  s2_left_hand_desk,
} from "@/assets/images";
import { slideInLeft, slideInRight, springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";

function SectionOne() {
  return (
    <section className="relative w-full overflow-hidden bg-[#286744] ">
      <div className="max-w-360 mx-auto">
        <Image
          src={greencheck_s2}
          alt="check"
          className="absolute -top-15 right-40 sm:right-10 sm:top-0 object-cover object-top scale-[1.5] sm:scale-[1] sm:w-full xl:w-fit z-0"
          priority
        />
        <div className="xl:hidden relative w-full">
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
                Your global wealth <br className="hidden sm:flex" /> in your
                pocket
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

            <MotionWrapper
              variants={slideInRight}
              delay={0.9}
              className="w-[30%]"
            >
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
            <Image
              src={s2_mobile}
              alt=""
              className="w-full h-auto object-cover"
            />
          </MotionWrapper>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex relative w-full h-180 overflow-hidden">
          <div className="mt-15 w-full z-20 pr-8">
            <MotionWrapper variants={slideInRight} delay={0.2}>
              <Typography
                as="h1"
                font="heading"
                size="display-lg"
                color="lime"
                align="right"
              >
                Everything
                <br />
                you earn,
                <br />
                <span className="text-white">instantly accessible</span>
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={slideInRight} delay={0.5}>
              <Typography
                font="lato"
                size="display-sm"
                color="off-white"
                align="right"
                weight="regular"
              >
                Your global wealth in your pocket
              </Typography>
            </MotionWrapper>
          </div>

          <MotionWrapper
            variants={slideInLeft}
            delay={0.7}
            className="absolute -bottom-5 left-0 w-[38%] z-30"
          >
            <Image
              src={s2_left_hand_desk}
              alt=""
              className="w-full h-auto object-contain object-top"
            />
          </MotionWrapper>

          <MotionWrapper
            variants={springUp}
            delay={0.4}
            className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[33%] z-40"
          >
            <Image
              src={s2_mobile}
              alt=""
              className="w-full h-auto object-contain object-bottom"
            />
          </MotionWrapper>

          <MotionWrapper
            variants={slideInRight}
            delay={0.9}
            className="absolute -bottom-5 right-0 w-[15%] z-30"
          >
            <Image
              src={s2_right_hand}
              alt=""
              className="w-full h-auto object-contain object-bottom"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
