// src/components/ComplaintItem.jsx
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ComplaintItem = ({ complaint, isExpanded, onToggle }) => {
  const isUnseen = complaint.seen_at === null;

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <header
        className={`flex cursor-pointer items-center justify-between p-4 transition-colors ${isExpanded ? "bg-slate-50" : "bg-white hover:bg-slate-50"}`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          {isUnseen && (
            <div
              className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-500"
              title="New Complaint"
            ></div>
          )}
          <span
            className={`font-semibold text-slate-700 ${!isUnseen && "ml-[26px]"}`}
          >
            {complaint.title}
          </span>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
          <ChevronDown className="h-5 w-5 text-slate-500" />
        </motion.div>
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
            className="overflow-hidden"
          >
            <div className={`pr-6 pb-5 pl-[50px] text-slate-600`}>
              <p className="mb-4">{complaint.body}</p>
              <div className="mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-xs text-slate-500">
                <span>
                  Submitted by: <strong>{complaint.submitter}</strong>
                </span>
                <button className="rounded-md bg-green-600 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-green-700">
                  Mark as Resolved
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComplaintItem;
