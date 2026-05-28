import Image from "next/image";
import { s4_img } from "@/assets/images";
import { Typography } from "../ui/typography";
import { MotionWrapper } from "../ui/motion-wrapper";
import { slideInRight, springUp } from "@/lib/animations";

function SectionFour() {
  return (
    <section className="w-full bg-[#8E8E93] overflow-hidden pt-10 sm:py-10 xl:py-0 px-6 xl:px-0">
      <div className="max-w-360 xl:w-[90%] mx-auto ">
        <div className="flex flex-col-reverse md:flex-col xl:flex-row items-center xl:justify-between">
          <MotionWrapper
            variants={springUp}
            delay={0.5}
            className="w-full xl:w-1/2 flex justify-center"
          >
            <div className="relative w-full aspect-4/4">
              <Image
                src={s4_img}
                alt="Borderless payment cards"
                fill
                className="object-cover"
                priority
              />
            </div>
          </MotionWrapper>

          <MotionWrapper
            delay={0.2}
            variants={slideInRight}
            className="w-full xl:w-1/2 flex flex-col items-end"
          >
            <Typography
              as="h2"
              font="heading"
              size="display-lg"
              color="white"
              weight={"bold"}
              tracking={"wide"}
              className="z-10 text-right xl:text-right"
            >
              Borderless <br />
              payments <br />
              without limit
            </Typography>

            <Typography
              as="p"
              font="source"
              size="body-md"
              weight="medium"
              color="white"
              className="max-w-sm xl:max-w-none text-right mt-4"
            >
              Make foreign payments and spend <br className="xl:hidden" />{" "}
              globally without limits
            </Typography>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
