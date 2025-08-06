import { ComplaintTypes } from "@/utils/types";
import { motion, Variants } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { useUpdateComplaint } from "./useUpdateComplaint";
import SmallSpinner from "@/ui/SmallSpinner";
import { useForm } from "react-hook-form";

interface UpdateComplaintTypes {
  setEditingComplaint: Dispatch<SetStateAction<ComplaintTypes | null>>;
  complaint: ComplaintTypes;
}

function UpdateComplaint({
  setEditingComplaint,
  complaint,
}: UpdateComplaintTypes) {
  const { updateComplaintMutation, isUpdatingComplaint } = useUpdateComplaint();
  const { handleSubmit, register } = useForm<ComplaintTypes>();
  const {
    category,
    complaint: complaintDescription,
    id: complaintId,
  } = complaint;

  const handleCloseModal = () => {
    setEditingComplaint(null);
  };

  function onSubmit(data: ComplaintTypes) {
    return updateComplaintMutation(
      { ...data, id: complaintId },
      { onSuccess: () => handleCloseModal() },
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-50"
      onClick={handleCloseModal}
    >
      <motion.div
        variants={modalDropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full px-4 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-bold text-gray-950">
          Update Complaint
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Title
            </label>
            <input
              {...register("category")}
              type="text"
              id="title"
              defaultValue={category}
              className="w-full rounded-md p-2 text-gray-950 ring-1 ring-gray-700/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Description
            </label>
            <textarea
              {...register("complaint")}
              id="description"
              defaultValue={complaintDescription}
              rows={4}
              className="w-full rounded-md p-2 text-slate-950 ring-1 ring-gray-700/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCloseModal}
              className="rounded-md bg-slate-600 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex w-[8rem] items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              {isUpdatingComplaint ? <SmallSpinner /> : "Save Changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

const modalDropIn: Variants = {
  hidden: { y: "-30px", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.2, type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { y: "30px", opacity: 0 },
};

export default UpdateComplaint;
