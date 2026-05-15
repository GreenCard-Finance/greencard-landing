// // import Image from "next/image";
// // import { Typography } from "@/components/ui/typography";
// // import {
// //   herowoman,
// //   heropay,
// //   herowoman_mobile,
// //   heropay_mobile,
// // } from "@/assets/images";
// // import { MotionWrapper } from "../ui/motion-wrapper";
// // import {
// //   slideInRight,
// //   slideInLeft,
// //   fadeInRight,
// //   springUp,
// // } from "@/lib/animations";
// // import { HeroArrow } from "../ui/hero-arrow";

// // export default function Hero() {
// //   return (
// //     <section className="w-full xl:h-screen">
// //       <div className="xl:hidden">
// //         <MotionWrapper variants={fadeInRight}>
// //           <div className="w-[90%] h-full ml-auto">
// //             <Image
// //               src={herowoman_mobile}
// //               alt="Woman at laptop"
// //               width={100}
// //               height={100}
// //               className="w-full h-full object-cover"
// //               priority
// //             />
// //           </div>
// //         </MotionWrapper>

// //         <div className="relative">
// //           <MotionWrapper
// //             variants={slideInLeft}
// //             delay={0.2}
// //             className="px-6 sm:px-10 pt-7 pb-5 sm:pt-10"
// //           >
// //             <Typography
// //               as="h1"
// //               font="heading"
// //               size="display-lg"
// //               color="charcoal"
// //               align="left"
// //               tracking="tight"
// //               className="flex-1"
// //             >
// //               Pay <br className="sm:hidden" /> globally{" "}
// //               <br className="sm:flex" /> with your{" "}
// //               <br className="hidden sm:flex" />
// //               <span className="text-[#145932]">GreenCard</span>
// //             </Typography>
// //           </MotionWrapper>
// //           <div className="absolute right-4 -top-12 sm:top-15 overflow-hidden">
// //             <HeroArrow />
// //           </div>
// //         </div>

// //         <MotionWrapper
// //           variants={springUp}
// //           delay={0.6}
// //           className="w-full h-auto"
// //         >
// //           <Image
// //             src={heropay_mobile}
// //             alt="Payment received on phone"
// //             width={100}
// //             height={100}
// //             className="w-full h-auto object-cover"
// //           />
// //         </MotionWrapper>
// //       </div>

// //       {/* desktop */}
// //       <div className="hidden xl:block relative h-screen min-h-200 max-h-screen w-full overflow-hidden">
// //         {" "}
// //         <MotionWrapper
// //           variants={slideInLeft}
// //           delay={0.2}
// //           className="absolute top-32 left-20 z-10"
// //         >
// //           <Typography
// //             as="h1"
// //             font="heading"
// //             size="display-md"
// //             color="charcoal"
// //             align="left"
// //             tracking="tight"
// //           >
// //             Pay globally
// //             <br />
// //             with your
// //             <br />
// //             <span className="text-[#145932]">GreenCard</span>
// //           </Typography>
// //         </MotionWrapper>
// //         <MotionWrapper
// //           variants={springUp}
// //           delay={0.6}
// //           className="absolute bottom-0 left-0 w-[50%] z-10"
// //         >
// //           <Image
// //             src={heropay}
// //             alt="Payment received on phone"
// //             width={800}
// //             height={700}
// //             className="w-full h-auto"
// //           />
// //         </MotionWrapper>
// //         <MotionWrapper
// //           variants={slideInRight}
// //           delay={0.4}
// //           className="absolute top-0 right-0 w-[52%] z-0"
// //         >
// //           <Image
// //             src={herowoman}
// //             alt="Woman at computer"
// //             width={900}
// //             height={800}
// //             className="w-full h-auto"
// //             priority
// //           />
// //         </MotionWrapper>
// //         <div className="absolute bottom-1 right-[28%] z-10">
// //           <HeroArrow />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

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
    <section className="max-w-360 mx-auto xl:h-screen w-full overflow-x-hidden xl:flex justify-between">
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

      <div className="hidden w-[50%] min-h-full xl:flex flex-col justify-between relative">
        <MotionWrapper
          delay={0.4}
          variants={slideInRight}
          className="w-full h-[80%]"
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
        <div className="absolute bottom-4 left-30 z-20">
          <HeroArrow />
        </div>
      </div>
    </section>
  );
}

export default Hero;
