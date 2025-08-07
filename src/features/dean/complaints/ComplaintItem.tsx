import { detectStatus } from "@/utils/detectStatus";
import { AllComplaintTypes } from "@/utils/types";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MarkAsButtons from "./MarkAsButtons";
import Priorities from "./Priorities";
import { useComplaints } from "@/slices/complaintsSlice";
import RestoreComplaint from "./RestoreComplaint";
import DeleteComplaintDean from "./DeleteComplaintDean";

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
  const { ui } = useComplaints();
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
    <div className="rounded-lg border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/20">
      <header
        className={`flex cursor-pointer items-center justify-between p-4 transition-colors duration-200 ${isExpanded ? "bg-slate-100 dark:bg-slate-800" : "bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/60"} ${isUnseen && !isExpanded ? "border-l-4 border-blue-500 pl-3" : "border-l-4 border-transparent"} `}
        onClick={onToggle}
      >
        <div className="flex flex-grow items-center gap-3">
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {ui === "withoutTrash" && (
            <div
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusObject?.color} ${statusObject?.bgColor}`}
            >
              {status}
            </div>
          )}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
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
            className="overflow-hidden border-t border-slate-200/90 bg-slate-50/80 dark:border-slate-700/80 dark:bg-slate-800/50"
          >
            <div className="space-y-5 p-6">
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                {complaintDescription}
              </p>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                Submitted by{" "}
                <strong className="font-semibold text-slate-700 dark:text-slate-300">
                  {full_name}
                </strong>{" "}
                on{" "}
                <time dateTime={new Date(created_at).toISOString()}>
                  {format(new Date(created_at), "MMMM d, yyyy hh:mm a")}
                </time>
              </div>

              <div className="flex flex-wrap items-center justify-around gap-3 border-t border-dashed border-slate-300 pt-4 dark:border-slate-700">
                {status !== "resolved" &&
                  status !== "rejected" &&
                  ui === "withoutTrash" && (
                    <MarkAsButtons complaint_id={complaint_id} />
                  )}
                {ui === "withoutTrash" && (
                  <Priorities
                    priority={priority}
                    complaint_id={complaint_id}
                    status={status}
                  />
                )}
                {ui === "withoutTrash" && (
                  <DeleteComplaintDean complaint_id={complaint_id} />
                )}
                {ui === "trashedOnly" && (
                  <RestoreComplaint complaint_id={complaint_id} />
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComplaintItem;
