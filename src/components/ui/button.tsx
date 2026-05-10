import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none font-source font-regular text-[16px] md:text-[20px] md:leading-[40px]",
  {
    variants: {
      variant: {
        lime: [
          "bg-[#9FE870] text-[#000000] border border-black hover:bg-[#8fd960]",
          "px-4 py-1",
          "md:px-4",
        ].join(" "),

        forest:
          "bg-[#46654F] text-white hover:bg-[#3a5542] rounded-[15px] w-full px-6 py-3",

        dark: [
          "bg-[#07331A] text-white hover:bg-[#052810]",
          "px-4 py-1",
          "md:px-10 md:py-3",
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
