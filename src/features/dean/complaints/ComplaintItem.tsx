import { detectStatus } from "@/utils/detectStatus";
import { AllComplaintTypes } from "@/utils/types";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { format } from "date-fns";
import Priorities from "./Priorities";

interface ComplaintItemTypes {
  complaint: AllComplaintTypes;
  isExpanded: boolean;
  onToggle: () => void;
}

const ComplaintItem = ({
  complaint,
  isExpanded,
  onToggle,
}: ComplaintItemTypes) => {
  const {
    category,
    seen_at,
    complaint: complaintDescription,
    status,
    full_name,
    priority,
    complaint_id,
    created_at,
  } = complaint;

  const isUnseen = seen_at === null;
  const statusObject = detectStatus(status);

  return (
    <div className="border-b border-slate-200/80 last:border-b-0">
      <header
        className={`flex cursor-pointer items-center justify-between p-4 transition-colors ${isExpanded ? "bg-slate-100/80 dark:bg-slate-800" : "bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/60"}`}
        onClick={onToggle}
      >
        <div className="flex flex-grow items-center gap-4">
          {isUnseen && (
            <div
              className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-500"
              title="New Complaint"
            />
          )}
          <span
            className={`text-lg font-semibold text-slate-900 dark:text-slate-100 ${!isUnseen && "ml-[26px]"}`}
          >
            {category}
          </span>
        </div>
        <div className="flex items-center gap-4 pr-4">
          <div
            className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${statusObject?.color} ${statusObject?.bgColor}`}
          >
            {status}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </motion.div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-slate-50 dark:bg-slate-800/50"
          >
            <div className="space-y-6 p-6 pl-12 text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">{complaintDescription}</p>

              <div className="border-t border-dashed border-slate-300 pt-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Submitted by:{" "}
                <strong className="font-semibold text-slate-600 dark:text-slate-300">
                  {full_name}
                </strong>{" "}
                <span className="text-xs">
                  at {format(created_at, "dd/MM/yyyy")}
                </span>
              </div>

              {status !== "resolved" && status !== "rejected" && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    Actions
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
                      <Check className="h-4 w-4" />
                      Mark as Resolved
                    </button>
                    <button className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
                      <X className="h-4 w-4" />
                      Mark as Rejected
                    </button>
                  </div>
                </div>
              )}
              <Priorities
                priority={priority}
                complaint_id={complaint_id}
                status={status}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComplaintItem;
