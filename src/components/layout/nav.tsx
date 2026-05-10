"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { logo_green } from "@/assets/images";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const regularLinks = navItems.filter((item) => !item.isButton);
  const ctaItem = navItems.find((item) => item.isButton);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/40 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="w-full">
          <div className="max-w-360 w-full mx-auto flex items-center justify-between xl:justify-start gap-x-14 h-20 px-4 md:h-24 xl:h-32 md:px-8 lg:px-20">
            <Link href="/" className="flex items-center gap-2 shrink-0 z-30">
              <Image
                src={logo_green}
                alt="Greencard Finance"
                width={140}
                height={36}
                priority
              />
            </Link>
            <ul className="hidden xl:flex items-center gap-x-14">
              {regularLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <Typography
                      as="span"
                      font="source"
                      size="body-lg"
                      weight="regular"
                      color="dark-gray"
                      className="hover:text-[#145932] transition-colors duration-200"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex">
              {ctaItem && <Button variant={"lime"}>JOIN WAITLIST</Button>}
            </div>
            <button
              className="xl:hidden text-[#1D1E22] flex items-center z-30"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
            >
              {isOpen ? (
                <X className="size-9 " fontWeight={600} />
              ) : (
                <Menu className="size-7" fontWeight={600} />
              )}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "fixed inset-0 z-20 top-0 pt-40 bg-white flex flex-col transition-transform duration-300 ease-in-out xl:hidden",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {ctaItem && (
            <Link
              href={ctaItem.href}
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#9FE870] py-3 flex items-center justify-center"
            >
              <Typography
                as="span"
                font="lato"
                size="body-lg"
                weight="regular"
                color="dark-gray"
              >
                {ctaItem.label}
              </Typography>
            </Link>
          )}

          <ul className="flex flex-col">
            {regularLinks.map((item) => (
              <li key={item.label} className="bg-[#F2F3FC]">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-3"
                >
                  <Typography
                    as="span"
                    font="lato"
                    size="body-lg"
                    weight="regular"
                    color="dark-gray"
                  >
                    {item.label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
