import { ReactNode } from "react";

interface InfoItemTypes {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  isHighlight?: boolean;
  badge?: ReactNode;
}

function InfoItem({
  icon,
  label,
  children,
  isHighlight = false,
  badge,
}: InfoItemTypes) {
  return (
    <div className="flex items-center gap-5 py-4">
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
          isHighlight
            ? "bg-indigo-100 dark:bg-indigo-200"
            : "bg-slate-100 dark:bg-slate-200"
        }`}
      >
        <span
          className={`text-2xl ${
            isHighlight ? "text-indigo-600" : "text-indigo-500"
          }`}
        >
          {icon}
        </span>
      </div>
      <div className="w-full">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-700">
          {label}
        </p>
        <div className="flex items-end gap-3">
          <p
            className={`font-semibold ${
              isHighlight
                ? "text-2xl text-indigo-700"
                : "text-base text-slate-700"
            }`}
          >
            {children}
          </p>
          {badge}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
