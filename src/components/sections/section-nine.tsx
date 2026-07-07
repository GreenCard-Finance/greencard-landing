import { MotionWrapper } from "../ui/motion-wrapper";
import { Typography } from "../ui/typography";
import { slideInLeft, slideInRight, springUp } from "@/lib/animations";

function SectionNine() {
  return (
    <section
      id="about-us"
      className="w-full bg-[#1F2933] py-15 overflow-hidden"
    >
      <div className="w-[90%] mx-auto max-w-360">
        <div className="flex flex-col gap-y-4 xl:hidden">
          <MotionWrapper variants={springUp}>
            <Typography as="p" font="source" size="body-lg" color="white">
              About GreenCard Finance
            </Typography>
          </MotionWrapper>

          <MotionWrapper variants={slideInLeft} delay={0.2}>
            <Typography
              as="h2"
              font="heading"
              size="display-lg"
              color="lime"
              weight={"bold"}
              className="tracking-wide"
            >
              Send home. <br />
              Stay close. <br />
              Support what matters.
            </Typography>
          </MotionWrapper>

          <MotionWrapper variants={springUp} delay={0.3}>
            <Typography
              as="p"
              font="source"
              size="body-xl"
              color="white"
              weight="black"
              align="left"
              className="mt-4 text-[22px] leading-tight opacity-100 sm:text-[32px] xl:text-[30px]"
            >
              Bringing home closer.
            </Typography>
          </MotionWrapper>

          <MotionWrapper variants={springUp} delay={0.4}>
            <Typography
              as="p"
              font="source"
              size="body-lg"
              color="white"
              weight="regular"
              align="left"
              className="opacity-80 leading-relaxed"
            >
              GreenCard Finance makes it easier to fund transfers in GBP for
              recipients in Nigeria receiving NGN, with clear rates, secure
              payments, reliable payout, and simple tracking from start to
              finish.
            </Typography>
          </MotionWrapper>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex items-start gap-x-20">
          <div className="w-[45%] flex flex-col gap-y-3">
            <MotionWrapper variants={springUp}>
              <Typography as="p" font="source" size="body-lg" color="white">
                About GreenCard Finance{" "}
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={slideInLeft} delay={0.2}>
              <Typography
                as="h2"
                font="heading"
                size="display-lg"
                color="lime"
                weight={"bold"}
                className="tracking-wide"
              >
                Send home. <br />
                Stay close. <br />
                Support what matters.
              </Typography>
            </MotionWrapper>
          </div>

          <div className="flex-1 flex flex-col gap-y-8 pt-12">
            <MotionWrapper variants={slideInRight} delay={0.3}>
              <Typography
                as="p"
                font="source"
                size="body-xl"
                color="white"
                weight="black"
                className="text-[22px] leading-tight opacity-100 sm:text-[32px] xl:text-[30px]"
              >
                Bringing home closer.
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={slideInRight} delay={0.4}>
              <Typography
                as="p"
                font="source"
                size="body-lg"
                color="white"
                weight="regular"
                className="opacity-80 leading-relaxed"
              >
                GreenCard Finance makes it easier to fund transfers in GBP for
                recipients in Nigeria receiving NGN, with clear rates, secure
                payments, reliable payout, and simple tracking from start to
                finish.
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.5}>
              <div className="w-16 h-0.5 bg-[#9FE870]" />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNine;
