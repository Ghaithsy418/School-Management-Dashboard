import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Award, ClipboardCheck, User } from "lucide-react";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ProfileMapTypes {
  informationsRef: React.RefObject<HTMLDivElement | null>;
  marksRef: React.RefObject<HTMLDivElement | null>;
}
function ProfileMap({ informationsRef, marksRef }: ProfileMapTypes) {
  const { t } = useTranslation("students");

  function handleScroll(ref: React.RefObject<HTMLDivElement | null>) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="sticky top-0 col-start-2 col-end-3 row-start-1 row-end-2 flex h-[34rem] flex-col items-center justify-center gap-4 rounded-xl bg-slate-100 px-1 py-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <Tooltip>
        <TooltipTrigger>
          <Location
            icon={<User className="h-6 w-6" />}
            onClick={() => handleScroll(informationsRef)}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("profileMap.profile")}</p>
        </TooltipContent>
      </Tooltip>
      <div className="h-28 w-0.5 rounded-full bg-slate-400/70" />
      <Tooltip>
        <TooltipTrigger>
          <Location
            icon={<Award className="h-6 w-6" />}
            onClick={() => handleScroll(marksRef)}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("profileMap.marks")}</p>
        </TooltipContent>
      </Tooltip>
      <div className="h-28 w-0.5 rounded-full bg-slate-400/70" />
      <Tooltip>
        <TooltipTrigger>
          <Location icon={<ClipboardCheck className="h-6 w-6" />} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("profileMap.attendance")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Location({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="group transition-all duration-300">
      <span
        onClick={() => onClick?.()}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-teal-600 p-3 text-violet-50 shadow-lg shadow-indigo-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/50"
      >
        {icon}
      </span>
    </div>
  );
}

export default ProfileMap;
