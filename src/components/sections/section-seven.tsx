"use client";

import Image from "next/image";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { s7_bye, s7_hello } from "@/assets/images";
import { MotionWrapper } from "../ui/motion-wrapper";
import { springUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { isValidEmail } from "@/lib/utils";

function SectionSeven() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSubmitted(true);
    } catch {
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <section
      id="waitlist"
      className="w-full overflow-hidden min-h-140 sm:min-h-175 xl:min-h-150 flex flex-col"
    >
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10"
          >
            <MotionWrapper variants={springUp}>
              <Image
                src={s7_hello}
                alt="Hello character"
                width={320}
                height={320}
                loading="eager"
                className="w-55 sm:w-70 xl:w-[320px] h-auto"
              />
            </MotionWrapper>

            <MotionWrapper variants={slideInLeft} delay={0.2} className="mt-6">
              <Typography
                as="h2"
                font="heading"
                size="display-md"
                color="charcoal"
                align="center"
                tracking="tight"
              >
                Get early access to <br />
                <Typography
                  as="span"
                  font="heading"
                  size="display-md"
                  color="green"
                  tracking="tight"
                >
                  GREENCARD FINANCE
                </Typography>
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.3} className="mt-3">
              <Typography
                as="p"
                font="source"
                size="body-md"
                color="black"
                align="center"
                weight="regular"
                className="leading-9"
              >
                Join the waitlist for clearer foreign online payments.
              </Typography>
            </MotionWrapper>

            <MotionWrapper
              variants={springUp}
              delay={0.4}
              className="w-full max-w-[60%] mt-6 flex flex-col xl:flex-row xl:max-w-2xl gap-3"
            >
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                className="w-full xl:w-[37%] border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
              />

              <input
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full xl:w-[37%] border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
              />
              {error && (
                <div className="mt-1 text-sm text-red-500 xl:hidden">
                  {error}
                </div>
              )}

              <Button
                variant="lime"
                onClick={handleSubmit}
                disabled={!name || !email || loading}
                className="w-fit mx-auto"
              >
                {loading ? "JOINING..." : "JOIN WAITLIST"}
              </Button>
            </MotionWrapper>

            {error && (
              <div className="mt-2 text-sm text-red-500 hidden xl:flex">
                {error}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10"
          >
            <MotionWrapper variants={springUp}>
              <Typography
                as="p"
                font="lato"
                size="body-lg"
                color="charcoal"
                align="center"
                tracking="wide"
                weight="regular"
              >
                YOU'RE ON THE LIST
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.2}>
              <Image
                src={s7_bye}
                alt="Welcome character"
                width={320}
                height={320}
                loading="eager"
                className="w-70 sm:w-90 xl:w-105 h-auto mt-4"
              />
            </MotionWrapper>

            <MotionWrapper variants={slideInRight} delay={0.3} className="mt-6">
              <Typography
                as="h2"
                font="heading"
                size="display-md"
                color="green"
                align="center"
                tracking="tight"
              >
                TALK SOON
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.4} className="mt-6">
              <Button
                variant="dark"
                onClick={handleBack}
                className="rounded-none! w-30"
              >
                Back
              </Button>
            </MotionWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SectionSeven;
