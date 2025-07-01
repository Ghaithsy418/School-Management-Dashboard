import Button from "@/ui/Button";
import SmallSpinner from "@/ui/SmallSpinner";
import { HiOutlineExclamationTriangle, HiOutlineTrash } from "react-icons/hi2";
import { useDeleteClass } from "./useDeleteClass";

interface DeleteClassTypes {
  className: string;
  classId: number;
  onCloseModal?: () => void;
}

function DeleteClass({ className, classId, onCloseModal }: DeleteClassTypes) {
  const { deleteClassMutation, isDeletingClass } = useDeleteClass();

  const handleDelete = () => {
    deleteClassMutation({ classId }, { onSuccess: () => onCloseModal?.() });
  };

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <HiOutlineExclamationTriangle className="h-10 w-10 text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800">Delete Class</h3>
        <p className="max-w-md text-slate-500">
          Are you sure you want to permanently delete the class{" "}
          <strong className="font-semibold text-slate-700">{className}</strong>?
          <br />
          This action cannot be undone.
        </p>
      </div>

      {/* The container now holds a single, focused action button. */}
      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={handleDelete}
          disabled={isDeletingClass}
          color="text-white"
          backgroundColor="bg-red-600"
          backgroundHover="hover:bg-red-700"
          className="w-full justify-center" // Button is now full-width for emphasis
        >
          {isDeletingClass ? (
            <SmallSpinner />
          ) : (
            <div className="flex items-center gap-2">
              <HiOutlineTrash className="h-5 w-5" />
              {/* Text is updated for clarity */}
              <span>Yes, delete class</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default DeleteClass;
