import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { MotionWrapper } from "../ui/motion-wrapper";
import { fadeIn, slideInUp } from "@/lib/animations";
import { sectionFive } from "@/lib/constants";
import { cn } from "@/lib/utils";

function SectionFive() {
  return (
    <section
      id="how-it-works"
      className="bg-[#6A4076] w-full py-10 md:py-20 overflow-hidden"
    >
      <div className="max-w-360 w-[90%] mx-auto text-center">
        <MotionWrapper variants={fadeIn}>
          <Typography
            as="h2"
            font="heading"
            size="display-md"
            color="white"
            align={"center"}
          >
            Get on board, easy as...
          </Typography>
        </MotionWrapper>

        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-16 xl:mt-12">
          {sectionFive.map((item, index) => (
            <MotionWrapper
              key={index}
              variants={slideInUp}
              delay={index * 0.2}
              className={cn(
                "bg-[#D9D9D9] flex flex-col items-center text-center h-fit transition-all p-4",
                index === 2
                  ? "md:col-span-2 md:mx-auto md:w-1/2 xl:col-span-1 xl:w-full"
                  : "",
              )}
            >
              <div className="w-full flex justify-start">
                <Typography
                  as="span"
                  font="heading"
                  size="display-md"
                  color="charcoal"
                >
                  {item.step}
                </Typography>
              </div>

              <div
                className={cn(
                  "relative w-full aspect-square transition-all",
                  index < 2 ? "-mt-8 max-w-60" : "mt-0 max-w-67 mb-0",
                )}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <Typography
                as="p"
                font="source"
                size="body-xl"
                color="charcoal"
                weight={"regular"}
                align={"center"}
                className={cn("my-2", index === 2 ? "-mt-13" : "")}
              >
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </Typography>

              <Typography
                as="p"
                font="source"
                size="body-md"
                color="charcoal"
                weight={"regular"}
                align={"center"}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />{" "}
              </Typography>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SectionFive;
