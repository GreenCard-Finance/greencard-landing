import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface RateCardProps {
  item: {
    pair: string;
    rate: string;
    change: string;
    trend: string;
    flag: string;
  };
}

export function RateCard({ item }: RateCardProps) {
  return (
    <div className="bg-[#46654F] rounded-2xl py-2 px-3 flex flex-col items-center w-[23%]">
      <div className="flex items-center gap-1">
        <span className="text-sm">{item.flag}</span>
        <Typography size="body-xs" color="off-white" weight="regular">
          {item.pair}
        </Typography>
      </div>
      <Typography size="body-xs" color="white" weight="bold">
        {item.rate}
      </Typography>
      <div
        className={cn(
          "w-fit px-2 py-0.5 rounded-full text-[10px] font-bold mt-1",
          item.trend === "up"
            ? "bg-[#B9FF66] text-[#286744]"
            : item.trend === "down"
              ? "bg-[#FF6666] text-white"
              : "bg-gray-400 text-white",
        )}
      >
        {item.change}
      </div>
    </div>
  );
}
