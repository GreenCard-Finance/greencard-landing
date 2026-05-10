import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { herowoman, heropay, herowoman_mobile } from "@/assets/images";
import { MotionWrapper } from "../ui/motion-wrapper";
import {
  slideInRight,
  slideInLeft,
  fadeInRight,
  springUp,
} from "@/lib/animations";
import { HeroArrow } from "../ui/hero-arrow";

export default function Hero() {
  return (
    <section className="w-full h-screen">
      <div className="xl:hidden">
        <MotionWrapper variants={fadeInRight}>
          <div className="w-[90%] h-full ml-auto">
            <Image
              src={herowoman_mobile}
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
            className="px-6 md:px-10 pt-7 pb-5 md:pt-10"
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
      {/* <div className="hidden h-screen max-h-screen w-full xl:flex justify-between overflow-hidden">
        <div className="flex flex-col h-full w-[50%]">
          <MotionWrapper
            variants={slideInLeft}
            delay={0.2}
            className="pl-20 pt-30"
          >
            <Typography
              as="h1"
              font="heading"
              size="display-md"
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
            variants={springUp}
            delay={0.6}
            className="relative flex-1 min-h-0 w-full"
          >
            <Image
              src={heropay}
              alt="Payment received on phone"
              fill
              className="h-full w-full object-fill"
            />
          </MotionWrapper>
        </div>

        <div className="flex flex-col h-full w-[50%]">
          <MotionWrapper
            variants={slideInRight}
            delay={0.4}
            className="relative flex-1 min-h-0"
          >
            <Image
              src={herowoman}
              alt="Payment received on phone"
              fill
              className="h-full w-full object-contain object-top"
            />
          </MotionWrapper>

          <div className="pl-30">
            <HeroArrow />
          </div>
        </div>
      </div> */}
      {/* 
      <div className="hidden xl:block relative h-screen max-h-screen w-full overflow-hidden">
        <MotionWrapper
          variants={slideInLeft}
          delay={0.2}
          className="absolute top-10 left-10 z-10"
        >
          <Typography
            as="h1"
            font="heading"
            size="display-md"
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
          variants={springUp}
          delay={0.6}
          className="absolute bottom-0 left-0 w-[46%] z-10"
        >
          <Image
            src={heropay}
            alt="Payment received on phone"
            width={800}
            height={700}
            className="w-full h-auto"
          />
        </MotionWrapper>

        <MotionWrapper
          variants={slideInRight}
          delay={0.4}
          className="absolute top-0 right-0 w-[54%] z-0"
        >
          <Image
            src={herowoman}
            alt="Woman at computer"
            width={900}
            height={800}
            className="w-full h-auto"
          />
        </MotionWrapper>

        <div className="absolute bottom-16 right-[26%] z-10">
          <HeroArrow />
        </div>
      </div> */}

      <div className="hidden xl:block relative h-screen min-h-200 max-h-screen w-full overflow-hidden">
        {" "}
        <MotionWrapper
          variants={slideInLeft}
          delay={0.2}
          className="absolute top-32 left-10 z-10"
        >
          <Typography
            as="h1"
            font="heading"
            size="display-md"
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
          variants={springUp}
          delay={0.6}
          className="absolute bottom-0 left-0 w-[50%] z-10"
        >
          <Image
            src={heropay}
            alt="Payment received on phone"
            width={800}
            height={700}
            className="w-full h-auto"
          />
        </MotionWrapper>
        <MotionWrapper
          variants={slideInRight}
          delay={0.4}
          className="absolute top-0 right-0 w-[50%] z-0"
        >
          <Image
            src={herowoman}
            alt="Woman at computer"
            width={900}
            height={800}
            className="w-full h-auto"
          />
        </MotionWrapper>
        <div className="absolute bottom-1 right-[28%] z-10">
          <HeroArrow />
        </div>
      </div>
    </section>
  );
}
