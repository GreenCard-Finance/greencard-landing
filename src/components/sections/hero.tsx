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
  lady,
} from "@/assets/images";
import Image from "next/image";
import { HeroArrow } from "../ui/hero-arrow";

function Hero() {
  return (
    <section className="mx-auto min-h-screen w-full overflow-x-hidden xl:flex justify-between">
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

      <div className="w-full h-full relative overflow-hidden flex flex-col bg-yellow-400">
        <div className="flex w-full h-[74vh] justify-between">
          <MotionWrapper variants={slideInLeft} className="mt-30">
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
          <div className="w-[55%] relative h-full">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#B286BF",
                clipPath: "polygon(72% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />

            <Image
              src={lady}
              alt="Woman at computer"
              width={800}
              height={800}
              priority
              className="absolute bottom-0 right-0 w-auto"
              style={{ height: "calc(100% - 110px)" }}
            />
          </div>
        </div>

        <div className="flex-1 flex w-full h-full">
          <div className="w-[45%] relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#1F2933",
                clipPath: "polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)",
              }}
            />
          </div>

          <div className="flex-1 bg-red-900">arrow</div>
        </div>
      </div>

      {/* <div className="hidden w-[45%] min-h-full xl:flex flex-col justify-between relative">
        <MotionWrapper
          variants={slideInLeft}
          className="mt-28 xl:mt-12 pl-20 2xl:mt-20 2xl:pl-0"
        >
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
          className="w-full h-fit xl:h-80 flex items-end absolute bottom-0 left-0"
        >
          <Image
            src={heropay}
            alt="app showing Payment Received"
            width={420}
            height={450}
            className="object-conver w-full h-full"
            priority
          />
        </MotionWrapper>
      </div>
      <div className="hidden w-[50%] relative xl:flex">
        <MotionWrapper
          delay={0.4}
          variants={slideInRight}
          className="w-full h-[85%]"
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
      </div>
      <div className="absolute -translate-x-35 left-1/2 -translate-y-1/2 top-1/2 z-20 hidden xl:block">
        <HeroArrow />
      </div> */}
    </section>
  );
}

export default Hero;
