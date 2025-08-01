import { ReactNode } from "react";

interface UiCardTypes {
  children: ReactNode;
  title: string;
  subTitle: string;
  iconColor?: string;
  iconBackgroundColor?: string;
  icon: ReactNode;
}

function UiCardSection({
  children,
  title,
  subTitle,
  icon,
  iconColor,
  iconBackgroundColor,
}: UiCardTypes) {
  return (
    <div className="flex w-full flex-col justify-between overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-lg dark:border-1 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-4 bg-gray-50 p-5 dark:bg-gray-950/30">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBackgroundColor ?? "bg-blue-100"} ${iconColor ?? "text-blue-600"} `}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{subTitle}</p>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default UiCardSection;
