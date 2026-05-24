import {
  fadeInRight,
  slideInLeft,
  slideInRight,
  springUp,
} from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";
import { heropay_mobile, herowoman_mobile, hand, lady } from "@/assets/images";
import Image from "next/image";
import { HeroArrow } from "../ui/hero-arrow";
import AnimatedText from "../ui/type-text";

function Hero() {
  return (
    <section className="mx-auto w-full overflow-x-hidden xl:flex justify-between xl:mt20">
      {" "}
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
      <div className="hidden w-full min-h-screen relative overflow-hidden xl:flex justify-between items-center">
        <div className="flex w-[45%] mx-auto h-full flex-col justify-between ">
          <MotionWrapper
            variants={slideInLeft}
            delay={0.5}
            className="ml-auto w-full pt-30 2xl:pt-35 pl-10 xl:pl-15 2xl:pl-0 2xl:w-160"
          >
            <Typography
              as="h1"
              font="heading"
              size="display-lg"
              color="charcoal"
              align="left"
              weight={"bold"}
              tracking="wide"
            >
              Pay globally <br />
              with your <br />
              <AnimatedText />
              {/* <span className="text-green-700">GreenCard</span> */}
            </Typography>
          </MotionWrapper>

          <MotionWrapper variants={springUp} delay={0.2}>
            <div
              className="w-full relative h-full"
              style={{ height: "calc(35vh + 50px)" }}
            >
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "85%",
                  backgroundColor: "#1F2933",
                  clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
                }}
              />
              <div className="w-full h-full">
                <Image
                  src={hand}
                  alt="Hand holding phone"
                  width={800}
                  height={800}
                  priority
                  className="absolute -bottom-2.5 left-0 h-full w-full object-contain"
                />
              </div>
            </div>
          </MotionWrapper>
        </div>

        <div className="w-[55%] h-full relative">
          <MotionWrapper variants={slideInRight} delay={0.2}>
            <div className="relative w-full h-[80vh]">
              <div
                className="absolute inset-0 w-[60%] ml-auto"
                style={{
                  backgroundColor: "#B286BF",
                  clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
              <Image
                src={lady}
                alt="Woman at computer"
                width={1400}
                height={1400}
                priority
                className="absolute bottom-0 right-0 w-full"
                style={{ height: "calc(100% - 90px)", maxWidth: "none" }}
              />
            </div>{" "}
          </MotionWrapper>
          <div className="absolute left-20 mt-6">
            <HeroArrow />
          </div>
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
      <div className="hidden w-[55%] relative xl:flex">
        <MotionWrapper
          delay={0.4}
          variants={slideInRight}
          className="w-full h-[75%] absolute right-0"
        >
          <Image
            src={herowoman}
            alt="Woman at computer"
            width={800}
            height={800}
            priority
            className="w-full h-full object-contain"
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
