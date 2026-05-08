import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none font-source font-regular text-[16px] md:text-[24px] md:leading-[40px]",
  {
    variants: {
      variant: {
        lime: [
          "bg-[#9FE870] text-[#000000] border border-black hover:bg-[#8fd960]",
          "w-[70px] h-[22px]",
          "md:w-[190px] md:h-[60px]",
        ].join(" "),
        forest:
          "bg-[#46654F] text-white hover:bg-[#3a5542] rounded-[15px] w-full",
        dark: [
          "bg-[#07331A] text-white hover:bg-[#052810]",
          "w-[70px] h-[22px]",
          "md:w-[190px] md:h-[60px]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "lime",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
