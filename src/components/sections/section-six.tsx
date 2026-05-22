"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { MotionWrapper } from "../ui/motion-wrapper";
import { springUp, slideInLeft } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/constants";

function SectionSix() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleVisible = () => {
    if (visibleCount < faqData.length) {
      setVisibleCount(faqData.length);
    } else {
      setVisibleCount(4);
      setOpenIndex(null);
    }
  };

  return (
    <section
      id="faqs"
      className="bg-[#1F2933] w-full py-15 px-6 overflow-hidden"
    >
      <div className="max-w-360 mx-auto flex flex-col xl:flex-row xl:items-center gap-y-12">
        <div className="w-full sm:w-[80%] xl:w-full mx-auto flex-1 xl:mb-17 ">
          <MotionWrapper variants={slideInLeft}>
            <Typography as="p" font="source" size="body-lg" color="white">
              FAQs
            </Typography>
            <Typography
              as="h2"
              font="heading"
              size="display-lg"
              color="lime"
              className="my-2"
            >
              Straight <br /> Answers
            </Typography>
            <Typography
              as="p"
              font="source"
              size="body-md"
              color="white"
              className="opacity-80"
            >
              If you don&apos;t see your question here,
              <br /> our team is happy to answer it directly
            </Typography>
          </MotionWrapper>
        </div>

        <div className="flex-1 flex flex-col gap-4 sm:gap-8 sm:w-[80%] xl:w-full mx-auto">
          <AnimatePresence mode="popLayout">
            {faqData.slice(0, visibleCount).map((item, index) => (
              <MotionWrapper
                layout
                key={index}
                initial="hidden"
                animate="visible"
                variants={springUp}
                className="w-full"
              >
                <div className="bg-[#D9D9D9] overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <Typography
                      as="span"
                      font="lato"
                      size="body-md"
                      color="charcoal"
                      weight="regular"
                    >
                      {item.question}
                    </Typography>

                    <div className="bg-[#1F2933] py-1 px-4 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-white" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-6 pt-2 border-t border-gray-300/30">
                          <Typography
                            as="p"
                            font="source"
                            size="body-sm"
                            color="charcoal"
                            className="leading-relaxed"
                          >
                            {item.answer}
                          </Typography>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionWrapper>
            ))}
          </AnimatePresence>

          <div className="mt-4 text-center">
            <button
              onClick={toggleVisible}
              className="text-white hover:opacity-100 transition-opacity"
            >
              <Typography
                as="span"
                font="lato"
                size="body-md"
                color="white"
                weight="regular"
                align={"center"}
              >
                {visibleCount < faqData.length
                  ? "View more questions"
                  : "View less"}{" "}
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
