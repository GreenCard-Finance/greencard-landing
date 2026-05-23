import { paga, afriex, kadavra, didit } from "@/assets/images";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";

function SectionEight() {
  const partners = [paga, afriex, kadavra, didit];

  return (
    <section className="bg-green-50 py-10 xl:py-20 xl:pl-6">
      <div className="max-w-360 w-[90%] mx-auto flex flex-col md:flex-row items-center xl:gap-12">
        <div className="md:w-1/3 xl:hidden">
          <Typography
            as="p"
            font="source"
            size="body-md"
            color={"green"}
            weight={"semibold"}
            align={"center"}
            className="uppercase tracking-widest"
          >
            {" "}
            Our Partners
          </Typography>
          <Typography
            as="p"
            font="source"
            size="body-md"
            color={"green"}
            weight={"semibold"}
            align={"center"}
            className="text-3xl font-bold text-gray-900 leading-tight mb-4"
          >
            {" "}
            Trusted by the best in fintech{" "}
          </Typography>

          <Typography
            as="p"
            font="source"
            size="body-sm"
            color={"charcoal"}
            weight={"regular"}
            align={"center"}
            className="leading-relaxed hidden xl:block"
          >
            We collaborate with leading platforms across Africa to deliver
            seamless, reliable financial experiences for everyone.{" "}
          </Typography>
        </div>
        <div className="hidden xl:block">
          <Typography
            as="p"
            font="source"
            size="body-lg"
            color={"green"}
            weight={"semibold"}
            align={"left"}
            className="uppercase tracking-widest"
          >
            Our Partners
          </Typography>
          <Typography
            as="p"
            font="source"
            // size="body-md"
            color={"green"}
            weight={"semibold"}
            align={"left"}
            className="text-3xl font-bold text-gray-900 leading-tight"
          >
            Trusted by the best in fintech{" "}
          </Typography>

          <p className="text-base">
            We collaborate with leading platforms across Africa <br /> to
            deliver seamless, reliable financial experiences for everyone.{" "}
          </p>
        </div>

        <div className="hidden md:block w-px h-20 bg-green-200" />

        <div className="flex-1 flex gap-8 items-center justify-between">
          {partners.map((icon, i) => (
            <MotionWrapper
              variants={springUp}
              delay={i * 0.15}
              key={i}
              className="w-[25%] opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                alt={`Partner ${i + 1}`}
                src={icon}
                height={40}
                objectFit="contain w-fit"
              />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
