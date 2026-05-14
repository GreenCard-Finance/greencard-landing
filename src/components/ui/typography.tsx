import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    font: {
      heading: "font-heading",
      source: "font-source",
      lato: "font-lato",
    },

    size: {
      // Lalezar display sizes
      "display-xl":
        "text-[55px] leading-[45px] md:text-[100px] md:leading-[100px] lg:text-[100px] lg:leading-[85px]",
      "display-lg":
        "text-[40px] leading-[35px] md:text-[80px] md:leading-[70px] lg:text-[110px] lg:leading-[90px] xl:leading-[85px]",
      "display-md":
        "text-[36px] leading-[45px] md:text-[40px] md:leading-[45px] lg:text-[90px] lg:leading-[70px]",
      "display-sm": "text-[16px] md:text-[24px] leading-auto",

      // Source Sans 3 body sizes
      "body-xl": "text-[16px] sm:text-[26px] leading-tight",
      "body-lg":
        "text-[16px] leading-[1.5] md:text-[24px] md:leading-[40px] lg:text-[20px] lg:leading-[40px] ",
      "body-md": "text-[14px] leading-[1.5] md:text-[16px] md:leading-[1.5]",
      "body-sm": "text-[12px] leading-[1.4] md:text-[14px] md:leading-[1.4]",
      "body-xs": "text-[10px] leading-[1] md:text-[12px]",

      // Lato footer sizes
      "footer-lg": "text-[18px] leading-[1.5]",
      "footer-sm": "text-[12px] leading-[1.4]",
    },

    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },

    color: {
      charcoal: "text-[#1F2933]",
      "dark-green": "text-[#145932]",
      black: "text-[#000000]",
      lime: "text-[#9FE870]",
      "off-white": "text-[#F7F9F8]",
      forest: "text-[#27563C]",
      white: "text-white",
      "dark-gray": "text-[#1D1E22]",
      green: "text-[#2E8B57]",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },

    tracking: {
      tight: "tracking-[-0.04em]",
      snug: "tracking-[-0.03em]",
      normal: "tracking-[-0.02em]",
      wide: "tracking-[0.01em]",
    },
  },

  defaultVariants: {
    font: "source",
    size: "body-lg",
    weight: "regular",
    color: "charcoal",
    align: "left",
    tracking: "normal",
  },
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType;
  };

export function Typography({
  as: Comp = "p",
  className,
  font,
  size,
  weight,
  color,
  align,
  tracking,
  ...props
}: TypographyProps) {
  return (
    <Comp
      className={cn(
        typographyVariants({ font, size, weight, color, align, tracking }),
        className,
      )}
      {...props}
    />
  );
}
