import { VscFeedback } from "react-icons/vsc";
import CreateComplaintForm from "./CreateComplaintForm";
import { useClickOutside } from "@/hooks/useClickOutside";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import ShowPreviousComplaints from "./ShowPreviousComplaints";

function CreateComplaint() {
  const [isOpen, setIsOpen] = useState(false);
  const [ui, setUi] = useState("addComplaint");
  const close = () => setIsOpen(false);

  const ref = useClickOutside(close);

  return (
    <div ref={ref} className="relative">
      <Tooltip>
        <TooltipTrigger>
          <div
            role="button"
            onClick={() => setIsOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gray-200/60 transition-all duration-300 hover:scale-110 hover:bg-gray-200 active:scale-95 dark:border dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <VscFeedback className="h-5 w-5" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add Complaint</p>
        </TooltipContent>
      </Tooltip>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="no-scrollbar absolute top-[4rem] left-[50%] z-30 min-h-[24rem] w-[24rem] -translate-x-[50%] overflow-y-auto rounded-md border border-gray-700/20 bg-white shadow-lg shadow-gray-700/30"
          >
            {ui === "addComplaint" && (
              <CreateComplaintForm close={close} setUi={setUi} />
            )}
            {ui === "previousComplaints" && (
              <ShowPreviousComplaints setUi={setUi} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const variants: Variants = {
  hidden: {
    scale: 0.9,
    top: "2rem",
  },
  visible: {
    scale: 1,
    top: "4rem",
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    top: "2rem",
    transition: {
      duration: 0.35,
    },
  },
};

export default CreateComplaint;
