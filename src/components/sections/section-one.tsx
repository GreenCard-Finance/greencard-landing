import Image from "next/image";
import { s1_mobile, greencheck_s2, s1_left_hand_desk } from "@/assets/images";
import { slideInLeft, slideInRight, springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";

function SectionOne() {
  return (
    <section className="relative w-full min-h-150 xl:min-h-170 2xl:min-h-190 overflow-hidden bg-[#286744]">
      <div className="hidden xl:block absolute left-0 bottom-10 w-[19%] z-10">
        <MotionWrapper variants={slideInLeft} delay={0.3}>
          <Image
            src={s1_left_hand_desk}
            alt=""
            className="w-full h-auto object-contain"
          />
        </MotionWrapper>
      </div>

      <div className="hidden xl:block absolute right-0 bottom-0 w-[29%] z-10">
        <MotionWrapper variants={springUp} delay={0.5}>
          <Image
            src={s1_mobile}
            alt=""
            className="w-full h-auto object-contain object-bottom"
          />
        </MotionWrapper>
      </div>

      <div className="mx-auto max-w-360">
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
                as="h2"
                font="heading"
                size="display-lg"
                color="lime"
                align="right"
                weight={"bold"}
                tracking="wide"
                className="mb-1"
              >
                Everything you earn,
                <br />
                <span className="text-white ml-2">instantly accessible</span>
              </Typography>
            </MotionWrapper>

            {/* tab */}
            <MotionWrapper
              variants={slideInRight}
              delay={0.2}
              className="hidden sm:flex"
            >
              <Typography
                as="h2"
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
                weight="medium"
                size="body-md"
                color="white"
                align={"right"}
                className="tracking-normal mt-4 w-[75%] ml-auto"
              >
                Multi-currency wallets to receive and manage your foreign income
              </Typography>
            </MotionWrapper>

            <MotionWrapper
              variants={springUp}
              delay={0.2}
              className="hidden sm:flex xl:hidden justify-center"
            >
              <Typography
                as="p"
                font="source"
                weight="medium"
                size="body-md"
                color="white"
                align={"center"}
                className="tracking-normal mt-4 w-[75%] mx-auto"
              >
                Multi-currency wallets to receive and manage your foreign income
              </Typography>
            </MotionWrapper>
          </div>

          <div className="mt-10 relative sm:hidden">
            <MotionWrapper
              variants={slideInLeft}
              delay={0.7}
              className="absolute w-[35%] -top-25"
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
                src={s1_mobile}
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
                src={s1_mobile}
                alt=""
                className="w-full h-auto object-cover"
              />
            </MotionWrapper>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex relative w-full h-fit overflow-hidden">
          <div className="max-w-360 xl:w-[90%] mx-auto z-20 mt-10">
            <MotionWrapper
              variants={springUp}
              delay={0.2}
              className="w-[92%] 2xl:w-full"
            >
              <Typography
                as="h2"
                font="heading"
                size="display-lg"
                color="lime"
                align="left"
                weight={"bold"}
                tracking="wide"
              >
                Everything you earn, <br />
                <span className="text-white">instantly accessible</span>
              </Typography>

              <Typography
                as="p"
                font="source"
                weight="medium"
                size="body-md"
                color="white"
                align={"left"}
                className="tracking-normal mt-4"
              >
                Multi-currency wallets to receive and manage your foreign income
              </Typography>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
