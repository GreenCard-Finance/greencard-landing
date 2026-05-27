import { logo_white } from "@/assets/images";
import Image from "next/image";
import {
  footerAddresses,
  footerLinks,
  footerPolicies,
  footerSocialLinks,
} from "@/lib/constants";
import Link from "next/link";
import { Typography } from "../ui/typography";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-5 px-5 xl:px-0 w-full">
      <div className="max-w-360 w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-y-3 w-fit">
            <Image src={logo_white} alt="footer-logo" width={140} height={36} />
            <ul className="space-y-1 pl-12">
              {footerLinks.map((item) => (
                <li key={item.label} className="group cursor-pointer">
                  <Link href={item.href}>
                    <Typography
                      as="p"
                      font="lato"
                      size="body-sm"
                      weight="regular"
                      color="white"
                      className="uppercase transition-opacity duration-200 group-hover:opacity-50"
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <Typography
            font="source"
            weight="regular"
            color="white"
            align="center"
            className="hidden xl:flex text-4xl! uppercase"
          >
            Contact us
          </Typography> */}

          <div className="flex flex-col gap-y-3 mt-8 mb-2 pl-12 xl:pl-0 xl:mt-0 xl:mb-0">
            <ul className="flex items-center justify-start sm:justify-end gap-x-3">
              {footerSocialLinks.map((item, i) => (
                <li
                  key={item.label}
                  className={i === 2 ? "mt-1 cursor-pointer" : "cursor-pointer"}
                >
                  <Link
                    href={item.href}
                    className="inline-flex transition-transform duration-200 hover:scale-90"
                  >
                    <Image src={item.icon} alt={`${item.label}-icon`} />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-1">
              {footerAddresses.map((item) => (
                <li key={item.label} className="group cursor-pointer">
                  <a href={item.href}>
                    <Typography
                      as="p"
                      font="lato"
                      size="body-sm"
                      weight="regular"
                      color="white"
                      className="transition-opacity duration-200 group-hover:opacity-50 text-left sm:text-right "
                    >
                      {item.label}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 xl:-mt-5">
          <Typography
            as="p"
            font="lato"
            size="body-sm"
            weight="regular"
            color="white"
            align="center"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            © {year} GreenCard Finance. All rights reserved.
          </Typography>
        </div>

        <ul className="flex items-center justify-center gap-x-5 sm:gap-x-30 xl:gap-x-3 mt-2">
          {footerPolicies.map((item) => (
            <li key={item.label} className="group cursor-pointer">
              <Link href={item.href} className="inline-flex">
                <Typography
                  as="p"
                  font="lato"
                  size="body-sm"
                  weight="regular"
                  color="white"
                  align="center"
                  className="uppercase transition-opacity duration-200 group-hover:opacity-50"
                >
                  {item.label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
