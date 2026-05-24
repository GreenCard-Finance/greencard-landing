import Image from "next/image";
import { s2__bg, s2__img_desktop, s2__img_mobile } from "@/assets/images";
import { Typography } from "../ui/typography";
import { MotionWrapper } from "../ui/motion-wrapper";
import { slideInLeft, springUp } from "@/lib/animations";

function SectionTwo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#9FE870] py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={s2__bg}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-360 mx-auto">
        {/* mobile */}
        <div className="flex flex-col sm:flex-col-reverse sm:gap-y-16 xl:hidden">
          <div className="text-left pl-4 w-full sm:hidden">
            <MotionWrapper variants={springUp}>
              <Typography
                as="h2"
                font="heading"
                size="display-lg"
                color="charcoal"
                weight={"bold"}
                align={"left"}
                className="tracking-wide"
              >
                Smart fx, <br /> better value
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.2}>
              <Typography
                as="p"
                font="source"
                size="body-xl"
                color="charcoal"
                weight="regular"
              >
                Stop losing money to hidden charges
              </Typography>
            </MotionWrapper>
          </div>

          <div className="text-right pr-8 w-full hidden sm:block">
            <MotionWrapper variants={springUp}>
              <Typography
                as="h2"
                font="heading"
                size="display-lg"
                color="charcoal"
                align={"right"}
              >
                Smart fx, <br /> better value
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.2}>
              <Typography
                as="p"
                font="source"
                size="body-xl"
                color="charcoal"
                weight="regular"
                align={"right"}
              >
                Stop losing money to hidden charges
              </Typography>
            </MotionWrapper>
          </div>

          <MotionWrapper
            variants={springUp}
            className="relative w-9/10 sm:w-[60%] mx-auto"
          >
            <Image
              src={s2__img_mobile}
              alt="Smart FX illustration"
              className="w-full object-contain"
              priority
            />
          </MotionWrapper>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex relative pb-15">
          <MotionWrapper
            variants={slideInLeft}
            className="relative w-[80%] 2xl:w-full h-full"
          >
            <Image
              src={s2__img_desktop}
              alt="Smart FX illustration"
              className="w-full h-full object-cover"
              priority
            />
          </MotionWrapper>

          <div className="w-fit absolute right-15 2xl:right-0 bottom-0">
            <MotionWrapper variants={springUp}>
              <Typography
                as="h2"
                font="heading"
                size="display-lg"
                color="charcoal"
                align={"right"}
              >
                Smart fx, <br /> better value
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.2}>
              <Typography
                as="p"
                font="source"
                size="body-xl"
                color="charcoal"
                weight="regular"
                align={"right"}
              >
                Stop losing money to hidden charges
              </Typography>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
