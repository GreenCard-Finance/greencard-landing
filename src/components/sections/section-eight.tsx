import { paga, afriex, kadavra, didit } from "@/assets/images";
import Image from "next/image";
import { Typography } from "../ui/typography";

function SectionEight() {
  const partners = [paga, afriex, kadavra, didit];

  return (
    <section className="bg-green-50 xl:py-10">
      <div className="max-w-360 w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <Typography
            as="p"
            font="source"
            size="body-md"
            color={"green"}
            weight={"semibold"}
            align={"left"}
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
            align={"left"}
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
            align={"left"}
            className="leading-relaxed"
          >
            We collaborate with leading platforms across Africa to deliver
            seamless, reliable financial experiences for everyone.{" "}
          </Typography>
        </div>

        <div className="hidden md:block w-px h-20 bg-green-200" />

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((icon, i) => (
            <div
              key={i}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                alt={`Partner ${i + 1}`}
                src={icon}
                height={40}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
