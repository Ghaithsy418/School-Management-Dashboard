import Spinner from "@/ui/Spinner";
import { ComplaintTypes } from "@/utils/types";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import UpdateComplaint from "./UpdateComplaint";
import { useGetPreviousComplaints } from "./useGetPreviousComplaints";
import { useDeleteComplaint } from "./useDeleteComplaint";

const ShowPreviousComplaints = ({
  setUi,
}: {
  setUi: Dispatch<SetStateAction<string>>;
}) => {
  const { i18n } = useTranslation();
  const { complaints, isGettingComplaints } = useGetPreviousComplaints();
  const { deleteComplaintMutation, isDeletingComplaint } = useDeleteComplaint();
  const [editingComplaint, setEditingComplaint] =
    useState<ComplaintTypes | null>(null);
  const [deletedItem, setDeletedItem] = useState(0);

  const handleStartUpdate = (complaint: ComplaintTypes) => {
    setEditingComplaint(complaint);
  };

  if (isGettingComplaints)
    return (
      <div className="flex h-[20rem] w-full flex-col items-center justify-center gap-2 py-8">
        <Spinner size="90" />
        <p className="text-sm font-light">Loading Complaints...</p>
      </div>
    );

  return (
    <>
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="no-scrollbar flex h-full w-full flex-col divide-y divide-slate-700/50 rounded-lg"
      >
        <div className="flex items-center justify-start gap-2 px-4 pt-4 pb-2">
          <button onClick={() => setUi("addComplaint")}>
            {i18n.language === "en" ? (
              <IoIosArrowRoundBack className="h-7 w-7 cursor-pointer transition-all duration-300 hover:text-indigo-600" />
            ) : (
              <IoIosArrowRoundForward className="h-7 w-7 cursor-pointer transition-all duration-300 hover:text-indigo-600" />
            )}
          </button>
          <h2 className="text-lg font-bold text-gray-950">
            Previous Complaints
          </h2>
        </div>
        <div className="divide-y-gray-700/30 flex flex-col divide-y">
          <AnimatePresence>
            {complaints && complaints?.length !== 0 ? (
              complaints?.map((complaint) => (
                <motion.div
                  key={complaint.id}
                  variants={listItemVariants}
                  layout
                  exit="exit"
                  className={`flex items-center justify-between gap-4 px-4 py-3 transition-all duration-300 hover:bg-gray-100/90 ${isDeletingComplaint && complaint.id === deletedItem ? "bg-gray-200/40 grayscale-50" : ""}`}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-950">
                      {complaint.category}
                    </h3>
                    <p className="mt-1 text-sm text-gray-800">
                      {complaint.complaint}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      onClick={() => handleStartUpdate(complaint)}
                      className="rounded-md p-2 text-indigo-600 transition-colors hover:text-indigo-500"
                      aria-label="Update complaint"
                    >
                      <Pencil size={17} />
                    </button>
                    <button
                      onClick={() => {
                        deleteComplaintMutation({
                          complaintId: complaint.id || 0,
                        });
                        setDeletedItem(complaint.id || 0);
                      }}
                      className="rounded-md p-2 text-red-600 transition-colors hover:text-red-500"
                      aria-label="Delete complaint"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="py-8 text-center text-sm text-gray-900">
                No previous complaints found.
              </p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {editingComplaint && (
          <UpdateComplaint
            setEditingComplaint={setEditingComplaint}
            complaint={editingComplaint}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const listContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const listItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default ShowPreviousComplaints;
