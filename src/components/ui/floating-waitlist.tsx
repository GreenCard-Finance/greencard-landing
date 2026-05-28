"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./button";

export function FloatingWaitlistButton() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const waitlistSection = document.querySelector("#waitlist");
    if (!waitlistSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(waitlistSection);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  const handleClick = () => {
    document.querySelector("#waitlist")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link href="#waitlist" className="fixed bottom-6 right-6 z-50 xl:hidden">
      <Button
        onClick={handleClick}
        className="rounded-full px-6 sm:px-8! py-3 shadow-lg border-black"
      >
        Join Waitlist
      </Button>
    </Link>
  );
}
