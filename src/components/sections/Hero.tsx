import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { herowoman, heropay, heroarrow } from "@/assets/images";
import { MotionWrapper } from "../ui/motion-wrapper";
import {
  fadeIn,
  slideInRight,
  slideInLeft,
  slideInUp,
  fadeInRight,
  springUp,
} from "@/lib/animations";
import { HeroArrow } from "../ui/hero-arrow";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="xl:hidden">
        <MotionWrapper variants={fadeInRight}>
          <div className="w-[95%] h-full ml-auto">
            <Image
              src={herowoman}
              alt="Woman at laptop"
              width={100}
              height={100}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </MotionWrapper>

        <div className="relative">
          <MotionWrapper
            variants={slideInLeft}
            delay={0.2}
            className="px-6 md:px-10 pt-6 md:pt-10"
          >
            <Typography
              as="h1"
              font="heading"
              size="display-lg"
              color="charcoal"
              align="left"
              tracking="tight"
              className="flex-1"
            >
              Pay <br className="md:hidden" /> globally{" "}
              <br className="md:flex" /> with your{" "}
              <br className="hidden md:flex" />
              <span className="text-[#145932]">GreenCard</span>
            </Typography>
          </MotionWrapper>
          <div className="absolute right-4 -top-12 md:top-15 overflow-hidden">
            <HeroArrow />
          </div>
        </div>

        <MotionWrapper
          variants={springUp}
          delay={0.6}
          className="w-[80%] h-auto"
        >
          <Image
            src={heropay}
            alt="Payment received on phone"
            width={100}
            height={100}
            className="w-full h-auto object-cover"
          />
        </MotionWrapper>
      </div>

      {/* desktop */}

      <div className="hidden xl:flex flex-col w-full">
        <div className="relative w-full">
          <MotionWrapper
            variants={slideInLeft}
            delay={0.2}
            className="flex flex-col justify-between px-20 pt-30"
          >
            <Typography
              as="h1"
              font="heading"
              size="display-xl"
              color="charcoal"
              align="left"
              tracking="tight"
            >
              Pay globally
              <br />
              with your
              <br />
              <span className="text-[#145932]">GreenCard</span>
            </Typography>
          </MotionWrapper>

          <MotionWrapper
            variants={slideInRight}
            delay={0.4}
            className="w-[50%] h-auto absolute right-0 -top-23"
          >
            <Image
              src={herowoman}
              alt="Payment received on phone"
              width={100}
              height={100}
              className="w-full h-auto object-cover"
            />
          </MotionWrapper>
        </div>

        <div className="relative">
          <MotionWrapper
            variants={springUp}
            delay={0.6}
            className="absolute w-[50%] h-auto"
          >
            <Image
              src={heropay}
              alt="Payment received on phone"
              width={100}
              height={100}
              className="w-full h-auto object-cover"
            />
          </MotionWrapper>
          <div className="absolute right-4 -top-12 md:top-15 xl:top-25 xl:right-[30%] 2xl:top-40">
            <HeroArrow />
          </div>
        </div>
      </div>
    </section>
  );
}
