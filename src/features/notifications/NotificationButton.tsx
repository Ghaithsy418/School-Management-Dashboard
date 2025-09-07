import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClickOutside } from "@/hooks/useClickOutside";
import FloatingList from "@/pages/FloatingList";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoBell } from "react-icons/go";
import IconNumber from "../../ui/IconNumber";
import NotificationsList from "./NotificationsList";

function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const ref = useClickOutside(close);

  const NotificationListToWindow =
    (Number(ref.current?.getBoundingClientRect()?.x) * 100) / window.innerWidth;

  return (
    <div ref={ref} className="relative">
      <Tooltip>
        <TooltipTrigger>
          <IconNumber
            onClick={() => setIsOpen((o) => !o)}
            numberOffset="right-1.5 top-1.5"
            className="h-10 w-10 items-center justify-center rounded-lg bg-gray-200/60 text-yellow-600 transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:border dark:border-gray-600 dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600"
          >
            <GoBell className="h-5 w-5" />
          </IconNumber>
        </TooltipTrigger>
        <TooltipContent>
          <p>Notifications</p>
        </TooltipContent>
      </Tooltip>
      <AnimatePresence mode="wait">
        {isOpen && (
          <FloatingList
            className={`${NotificationListToWindow > 85 ? "-right-10" : "left-[50%] -translate-x-[50%]"}`}
          >
            <NotificationsList />
          </FloatingList>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NotificationButton;
