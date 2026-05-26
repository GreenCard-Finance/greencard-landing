import { slideInUp, springUp } from "@/lib/animations";
import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";

import Converter from "../features/converter/converter";
import { fetchPublicBootstrap } from "@/lib/service/fx";
import { headers } from "next/headers";

async function SectionThree() {
  const requestHeaders = await headers();
  const bootstrapHeaders = new Headers();
  const countryCode = firstHeaderValue(requestHeaders, [
    "x-user-country-code",
    "x-preferred-country-code",
    "x-user-country",
    "cf-ipcountry",
    "x-vercel-ip-country",
    "x-country-code",
  ]);

  [
    "cf-ipcountry",
    "x-vercel-ip-country",
    "x-country-code",
    "accept-language",
  ].forEach((header) => {
    const value = requestHeaders.get(header);
    if (value) bootstrapHeaders.set(header, value);
  });

  const bootstrap = await fetchPublicBootstrap({
    countryCode,
    headers: bootstrapHeaders,
  });

  return (
    <section id="product" className="relative overflow-hidden">
      {/* <Image
        src={s3_svg}
        alt="svg image"
        width={500}
        height={500}
        className="hidden xl:block absolute right-0 top-0 h-full w-auto -z-5"
        priority
      /> */}
      <div className="max-w-360 w-[90%] mx-auto flex flex-col gap-y-5 xl:flex-row xl:items-center py-9 xl:py-22">
        <MotionWrapper
          variants={slideInUp}
          className="w-full xl:flex-1 items-center"
        >
          <Typography
            as="h2"
            font="heading"
            size="display-lg"
            color="forest"
            align="left"
            weight={"black"}
            tracking="wide"
            className="text-center xl:text-left tracking-wide"
          >
            Transfers at <br className="hidden sm:block xl:hidden" /> rates
            <br className="block sm:hidden" /> That{" "}
            <br className="hidden sm:block xl:hidden" /> work{" "}
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
        <MotionWrapper variants={springUp} delay={0.5} className="xl:w-[40%]">
          <Converter bootstrap={bootstrap} />
        </MotionWrapper>
      </div>
    </section>
  );
}

function firstHeaderValue(requestHeaders: Headers, headerNames: string[]) {
  for (const headerName of headerNames) {
    const value = requestHeaders.get(headerName)?.trim();
    if (value) return value;
  }

  return undefined;
}

export default SectionThree;
