import {
  fadeInRight,
  slideInLeft,
  slideInRight,
  springUp,
} from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";
import {
  herowoman,
  heropay,
  heropay_mobile,
  herowoman_mobile,
} from "@/assets/images";
import Image from "next/image";
import { HeroArrow } from "../ui/hero-arrow";

function Hero() {
  return (
    <section className="max-w-360 mx-auto xl:min-h-screen w-full overflow-x-hidden xl:flex justify-between">
      {/* mobile */}
      <div className="xl:hidden relative">
        <MotionWrapper
          variants={fadeInRight}
          className="w-[95%] h-full ml-auto"
        >
          <Image
            src={herowoman_mobile}
            alt="Woman at laptop"
            width={100}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </MotionWrapper>

        <div className="relative">
          <MotionWrapper
            variants={slideInLeft}
            delay={0.2}
            className="px-6 sm:px-10 pt-7 pb-5 sm:pt-5 sm:-mb-5"
          >
            <Typography
              as="h1"
              font="heading"
              size="display-lg"
              color="charcoal"
              align="left"
            >
              Pay <br className="sm:hidden" /> globally{" "}
              <br className="sm:flex" /> with your <br />
              <span className="text-[#145932]">GreenCard</span>
            </Typography>
          </MotionWrapper>
          <div className="absolute right-4 -top-12 sm:top-15 overflow-hidden">
            <HeroArrow />
          </div>
        </div>

        <MotionWrapper
          variants={springUp}
          delay={0.6}
          className="w-full h-auto"
        >
          <Image
            src={heropay_mobile}
            alt="Payment received on phone"
            width={100}
            height={100}
            className="w-full h-auto object-cover"
          />
        </MotionWrapper>
      </div>
      {/* desktop */}
      <div className="hidden w-[45%] min-h-full xl:flex flex-col justify-between">
        <MotionWrapper variants={slideInLeft} className="mt-24 pl-20">
          <Typography
            as="h1"
            font="heading"
            size="display-lg"
            color="charcoal"
            align="left"
            tracking="tight"
          >
            Pay globally <br />
            with your <br />
            <span className="text-green-700">GreenCard</span>
          </Typography>
        </MotionWrapper>

        <MotionWrapper
          variants={springUp}
          delay={0.5}
          className="w-full h-105 flex items-end"
        >
          <Image
            src={heropay}
            alt="app showing Payment Received"
            width={420}
            height={450}
            className="object-cover w-full h-full"
            priority
          />
        </MotionWrapper>
      </div>
      <div className="hidden w-[50%] min-h-full xl:flex flex-col justify-between relative overflow-hidden">
        <MotionWrapper
          delay={0.4}
          variants={slideInRight}
          className="w-full h-[75%]"
        >
          <Image
            src={herowoman}
            alt="Woman at computer"
            width={800}
            height={800}
            priority
            className="w-full h-full object-cover"
          />
        </MotionWrapper>
        <div className="absolute bottom-18 left-30 z-20">
          <HeroArrow />
        </div>
      </div>
    </section>
  );
}

export default Hero;
