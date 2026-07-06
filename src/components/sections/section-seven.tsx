"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { s7_bye, s7_hello } from "@/assets/images";
import { MotionWrapper } from "../ui/motion-wrapper";
import { springUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { isValidEmail } from "@/lib/utils";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const WHATSAPP_TOOLTIP_TEXT =
  "We would like to add you to our whatsapp community, please provide us your detail(s) if interested.";

const isValidWhatsappNumber = (value: string) => {
  if (!value) return true;
  return /^\+?[0-9\s\-]{7,15}$/.test(value);
};

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [show]);

  return (
    <span
      ref={ref}
      className="relative inline-flex items-center ml-1"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={(e) => {
        e.stopPropagation();
        setShow((prev) => !prev);
      }}
    >
      <HiOutlineQuestionMarkCircle
        size={16}
        className="text-black cursor-pointer font-semibold"
      />
      {show && (
        <span
          className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56
                     rounded bg-[#2E8B57] text-white text-xs px-3 py-2 z-50"
        >
          {text}
        </span>
      )}
    </span>
  );
}

function SectionSeven() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [whatsappUsername, setWhatsappUsername] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email) {
      setError("Please fill in all required fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!isValidWhatsappNumber(whatsappNumber)) {
      setError("Please enter a valid WhatsApp number, e.g. +2341234567890");
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
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          whatsappUsername: whatsappUsername || undefined,
          whatsappNumber: whatsappNumber || undefined,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setError(data?.error || "Failed to join waitlist. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        window.open(
          "https://www.instagram.com/usegreencard",
          "_blank",
          "noopener,noreferrer",
        );
      }, 2000);
    } catch {
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSubmitted(false);
    setFirstName("");
    setLastName("");
    setWhatsappUsername("");
    setWhatsappNumber("");
    setEmail("");
    setError("");
  };

  return (
    <section
      id="waitlist"
      className={`max-w-360 mx-auto w-full overflow-hidden flex flex-col transition-all duration-300 ${
        submitted ? "min-h-100 md:min-h-120 xl:min-h-150" : "py-10"
      }`}
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
                weight={"bold"}
              >
                Get early access to <br />
                <span className="text-[#2E8B57]">GREENCARD FINANCE</span>
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.3} className="mt-3">
              <Typography
                as="p"
                font="source"
                size="body-md"
                weight="medium"
                color="charcoal"
                align="center"
                className="xl:leading-9"
              >
                Join the waitlist for clearer foreign online payments.
              </Typography>
            </MotionWrapper>

            <MotionWrapper
              variants={springUp}
              delay={0.4}
              className="w-full max-w-[85%] xl:max-w-3xl mt-6 flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full text-left">
                  <label className="flex items-center text-xs text-gray-600 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setError("");
                    }}
                    className="w-full border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
                  />
                </div>
                <div className="w-full text-left">
                  <label className="flex items-center text-xs text-gray-600 mb-1">
                    Last name
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="e.g. Musa "
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setError("");
                    }}
                    className="w-full border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full text-left">
                  <label className="flex items-center text-xs text-gray-600 mb-1">
                    WhatsApp username (optional)
                    <Tooltip text={WHATSAPP_TOOLTIP_TEXT} />
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. tolu_chinny"
                    value={whatsappUsername}
                    onChange={(e) => setWhatsappUsername(e.target.value)}
                    className="w-full border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
                  />
                </div>
                <div className="w-full text-left">
                  <label className="flex items-center text-xs text-gray-600 mb-1">
                    WhatsApp number (optional)
                    <Tooltip text={WHATSAPP_TOOLTIP_TEXT} />
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +2341234567890"
                    value={whatsappNumber}
                    maxLength={16}
                    onChange={(e) => {
                      const filtered = e.target.value.replace(
                        /[^0-9+\s-]/g,
                        "",
                      );
                      setWhatsappNumber(filtered);
                      setError("");
                    }}
                    className="w-full border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center text-xs text-gray-600 mb-1">
                  Email
                </label>{" "}
                <input
                  type="email"
                  placeholder="Email address (e.g. you@gmail.com)"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-gray-600 rounded px-4 py-3 text-sm xl:text-base placeholder:text-gray-600 outline-none focus:border-[#145932] transition-colors"
                />
                {error && (
                  <div className="text-sm text-red-500 text-left">{error}</div>
                )}
              </div>
              <Button
                variant="lime"
                onClick={handleSubmit}
                disabled={!firstName || !lastName || !email || loading}
                className="w-fit mx-auto rounded-full py-2 px-8 mt-2"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>
            </MotionWrapper>
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
                YOU&apos;RE ON THE LIST
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
                weight={"bold"}
                className="tracking-wide"
              >
                TALK SOON
              </Typography>
            </MotionWrapper>

            <MotionWrapper variants={springUp} delay={0.4} className="mt-6">
              <Button
                variant="dark"
                onClick={handleBack}
                className="rounded-full w-30 py-2"
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
