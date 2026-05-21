import Image from "next/image";
import { s3_svg } from "@/assets/images";
import { slideInUp, springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";

import Converter from "../features/converter/converter";
import { fetchInitialRate } from "@/lib/service/fx";

async function SectionThree() {
  const data = await fetchInitialRate();
  // console.log({ data }, "from main");

  return (
    <section
      id="product"
      className="relative overflow-hidden py-9 xl:py-6 px-6"
    >
      <Image
        src={s3_svg}
        alt="svg image"
        width={500}
        height={500}
        className="hidden xl:block absolute right-0 top-0 h-full w-auto -z-5"
        priority
      />
      <div className=" max-w-360 w-full mx-auto flex flex-col gap-y-5 xl:flex-row xl:items-center">
        <MotionWrapper
          variants={slideInUp}
          className="w-full xl:w-2/3 items-center"
        >
          <Typography
            as="h1"
            font="heading"
            size="display-lg"
            color="forest"
            align={"left"}
            className="text-center xl:text-left"
          >
            Transfers at <br className="hidden sm:block xl:block" /> rates
            <br className="block sm:hidden" /> that{" "}
            <br className="hidden sm:block" /> work{" "}
            <br className="hidden sm:hidden" /> for
            <br className="block sm:hidden" /> you
          </Typography>

          <Typography
            as="p"
            font="source"
            size="body-xl"
            color="black"
            weight="regular"
            align={"left"}
            className="text-center xl:text-left"
          >
            Move between currencies seamlessly <br />
            when the market is in your favour
          </Typography>
        </MotionWrapper>
        <MotionWrapper variants={springUp} delay={0.5}>
          <Converter data={data} />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default SectionThree;
