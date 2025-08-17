import { ReactNode } from "react";

interface SmallStatsCard {
  icon: ReactNode;
  stats: string | number;
  title: string;
  borderColor?: string;
  width?: string;
}

function SmallStatsCard({
  icon,
  title,
  stats,
  borderColor = "bg-gray-700/20",
  width,
}: SmallStatsCard) {
  return (
    <div
      className={`flex justify-center gap-5 rounded-md border-1 ${width} ${borderColor}`}
    >
      {icon}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg text-gray-500 rtl:text-base">{title}</h3>
        <p className="text-lg font-semibold">{stats}</p>
      </div>
    </div>
  );
}

export default SmallStatsCard;
