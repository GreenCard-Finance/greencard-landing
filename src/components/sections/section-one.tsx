import Image from "next/image";
import {
  s1_left_hand,
  s1_right_hand,
  s1_phone_img,
  greencheck_s2,
  s1_left_hand_desk,
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
          className="absolute -top-15 right-40 sm:right-10 sm:top-0 object-cover object-top scale-[1.5] sm:scale-[1] xl:scale-[0.9] sm:w-full xl:w-fit xl:-top-42 xl:-translate-x-1/2 xl:left-1/2 z-0"
          priority
        />
        <div className="xl:hidden flex flex-col gap-y-6 w-full">
          <div className="mt-10 mr-4 sm:mx-auto">
            <MotionWrapper
              variants={slideInRight}
              delay={0.2}
              className="sm:hidden"
            >
              <Typography
                as="h1"
                font="heading"
                size="display-lg"
                color="lime"
                align="right"
                className="mb-1"
              >
                Everything <br />
                you earn,
                <br />
                <span className="text-white ml-2">
                  instantly <br /> accessible
                </span>
              </Typography>
            </MotionWrapper>

            {/* tab */}
            <MotionWrapper
              variants={slideInRight}
              delay={0.2}
              className="hidden sm:flex"
            >
              <Typography
                as="h1"
                font="heading"
                size="display-lg"
                color="lime"
                align="center"
              >
                Everything you <br />
                earn,
                <span className="text-white ml-2">
                  instantly <br /> accessible
                </span>
              </Typography>
            </MotionWrapper>
            {/* tab */}

            <MotionWrapper
              variants={springUp}
              delay={0.2}
              className="sm:hidden"
            >
              <Typography
                as="p"
                font="source"
                size="body-xl"
                weight="regular"
                color="white"
                align="right"
              >
                Your global wealth in your pocket
              </Typography>
            </MotionWrapper>
          </div>

          <div className="mt-10 relative sm:hidden">
            <MotionWrapper
              variants={slideInLeft}
              delay={0.7}
              className="absolute w-[35%] -top-30"
            >
              <Image
                src={s1_left_hand_desk}
                alt=""
                className="w-full h-full object-cover scale-110 sm:scale-100"
              />
            </MotionWrapper>
            <MotionWrapper
              variants={springUp}
              delay={0.4}
              className="w-[75%] ml-auto"
            >
              <Image
                src={s1_phone_img}
                alt=""
                className="w-full h-auto object-cover"
              />
            </MotionWrapper>
          </div>

          <div className="mt-10 hidden sm:flex items-start">
            <MotionWrapper
              variants={slideInLeft}
              delay={0.7}
              className="w-[45%] -mt-6"
            >
              <Image
                src={s1_left_hand_desk}
                alt=""
                className="w-full h-full object-cover scale-110 sm:scale-100"
              />
            </MotionWrapper>
            <MotionWrapper
              variants={springUp}
              delay={0.4}
              className="flex-1 -mr-12 overflow-hidden"
            >
              <Image
                src={s1_phone_img}
                alt=""
                className="w-full h-auto object-cover"
              />
            </MotionWrapper>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex relative w-full h-fit overflow-hidden">
          <div className="w-[60%] z-20 pl-8 mt-10">
            <MotionWrapper variants={slideInRight} delay={0.2}>
              <Typography
                as="h1"
                font="heading"
                size="display-lg"
                color="lime"
                align="left"
              >
                Everything
                <br />
                you earn,
                <br />
                <span className="text-white">instantly accessible</span>
              </Typography>
            </MotionWrapper>

            <MotionWrapper
              variants={slideInLeft}
              delay={0.3}
              className="w-[20%] h-fit absolute left-0"
            >
              <Image
                src={s1_left_hand_desk}
                alt=""
                className="w-full h-auto object-contain object-top"
              />
            </MotionWrapper>
          </div>

          <MotionWrapper variants={springUp} delay={0.5} className="flex-1">
            <Image
              src={s1_phone_img}
              alt=""
              className="w-full h-fit object-contain object-bottom"
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
