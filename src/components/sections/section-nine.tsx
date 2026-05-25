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
              Earn globally. <br />
              Move money <br />
              confidently. <br />
              Live locally.
            </Typography>
          </MotionWrapper>

          <MotionWrapper variants={springUp} delay={0.3}>
            <Typography
              as="p"
              font="source"
              size="body-lg"
              color="white"
              weight="regular"
              align="left"
              className="opacity-80 leading-relaxed mt-4"
            >
              GreenCard Finance is building a faster, clearer way for Africans
              to move money across borders. We help freelancers, remote workers,
              creators, and globally connected professionals send, receive,
              convert, and access foreign currency with more control.
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
              Whether you earn in pounds, dollars, or Canadian dollars,
              GreenCard makes it easier to turn global income into local value.
              With competitive rates, fast local payouts, and clear transaction
              tracking from start to finish, GreenCard Finance is designed to
              make cross-border money feel simpler and more reliable.
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
                Earn globally. <br />
                Move money <br />
                confidently. <br />
                Live locally.
              </Typography>
            </MotionWrapper>
          </div>

          <div className="flex-1 flex flex-col gap-y-8 pt-12">
            <MotionWrapper variants={slideInRight} delay={0.3}>
              <Typography
                as="p"
                font="source"
                size="body-lg"
                color="white"
                weight="regular"
                className="opacity-80 leading-relaxed"
              >
                GreenCard Finance is building a faster, clearer way for Africans
                to move money across borders. We help freelancers, remote
                workers, creators, and globally connected professionals send,
                receive, convert, and access foreign currency with more control.
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
                Whether you earn in pounds, dollars, or Canadian dollars,
                GreenCard makes it easier to turn global income into local
                value. With competitive rates, fast local payouts, and clear
                transaction tracking from start to finish, GreenCard Finance is
                designed to make cross-border money feel simpler and more
                reliable.
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
