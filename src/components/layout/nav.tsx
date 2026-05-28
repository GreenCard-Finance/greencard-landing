"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { logo_green } from "@/assets/images";
import { navItems } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import { CountrySelector } from "../features/country/country-selector";

export default function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const regularLinks = navItems.filter((item) => !item.isButton);
  const ctaItem = navItems.find((item) => item.isButton);

  return (
    <>
      <header
        className={cn(
          "sticky xl:fixed xl:w-full top-0 z-50 transition-all duration-300 shadow-sm ",
          showNav ? "translate-y-0" : "-translate-y-full",
          isScrolled ? "bg-white/40 backdrop-blur-md shadow-sm" : "bg-white",
        )}
      >
        <nav className="w-full">
          <div className="max-w-360 w-[90%] mx-auto flex items-center justify-between gap-x-6 h-20 sm:h-30 xl:h-20 xl:px-0">
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 z-30 w-4/10 sm:w-3/10 xl:w-fit"
            >
              <Image
                src={logo_green}
                alt="Greencard Finance"
                width={160}
                height={36}
                priority
                className="object-cover w-full h-full"
              />
            </Link>
            <ul className="hidden xl:flex items-center gap-x-10 w-fit">
              {regularLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace("#", ""));
                    }}
                  >
                    <Typography
                      as="span"
                      font="source"
                      size="body-lg"
                      weight={activeHash === item.href ? "semibold" : "regular"}
                      color={"dark-gray"}
                      className="hover:text-[#145932] transition-colors duration-200"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex xl:items-center xl:gap-3">
              <CountrySelector />
              {ctaItem && (
                <Button
                  className="rounded-full"
                  onClick={() => scrollToSection(ctaItem.href.replace("#", ""))}
                  variant={"lime"}
                >
                  {ctaItem.label}
                </Button>
              )}
            </div>
            <div className="xl:hidden flex items-center gap-2 z-30">
              <CountrySelector compact />
              <button
                className="text-[#1D1E22] flex items-center w-7 h-7"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open menu"
              >
                {isOpen ? (
                  <X className="size-9" fontWeight={600} />
                ) : (
                  <Menu className="size-7" fontWeight={600} />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={cn(
            "fixed inset-0 z-20 top-0 pt-40 bg-white h-screen flex flex-col transition-transform duration-300 ease-in-out xl:hidden overflow-hidden",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {ctaItem && (
            <Link
              href={ctaItem.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                scrollToSection(ctaItem.href.replace("#", ""));
              }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    scrollToSection(item.href.replace("#", ""));
                  }}
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
