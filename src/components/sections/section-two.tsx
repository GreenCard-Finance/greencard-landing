import Image from "next/image";
import { s2__bg, s2__img_desktop, s2__img_mobile } from "@/assets/images";
import { Typography } from "../ui/typography";
import { MotionWrapper } from "../ui/motion-wrapper";
import { springUp } from "@/lib/animations";

function SectionTwo() {
  return (
    <section className="w-full bg-[#9FE870] py-20 xl:py32 overflow-hidden relative min-h-165 flex items-center">
      <div className="absolute inset-0 z-0 sm:top-32 xl:top-0">
        <Image
          src={s2__bg}
          alt="background pattern"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[90%] h-[80%] xl:hidden">
          <Image
            src={s2__img_mobile}
            alt="mobile background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative hidden xl:block w-[70%] h-[70%]">
          <Image
            src={s2__img_desktop}
            alt="desktop background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full min-h-full">
        <div className="flex flex-col items-start sm:items-end! absolute left-4 -top-56 sm:top-24 sm:right-4">
          <MotionWrapper variants={springUp}>
            <Typography
              as="h2"
              font="heading"
              size="display-lg"
              color="forest"
              //   align={"right"}
              className="text-left sm:text-right"
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
      </div>
    </section>
  );
}

export default SectionTwo;
