import Button from "@/ui/Button";
import { useDeleteClass } from "./useDeleteClass";
import SmallSpinner from "@/ui/SmallSpinner";
import { Dispatch, SetStateAction } from "react";

interface DeleteClassTypes {
  className: string;
  classId: number;
  onCloseModal?: () => void;
  setIsHover: Dispatch<SetStateAction<boolean>>;
}

function DeleteClass({
  className,
  classId,
  onCloseModal,
  setIsHover,
}: DeleteClassTypes) {
  const { deleteClassMutation, isDeletingClass } = useDeleteClass();
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg font-semibold">
        Are you sure you want to delete this class({className})?
      </h3>
      <div className="flex items-center justify-center gap-5 place-self-end">
        <Button
          setIsHover={setIsHover}
          onClick={() =>
            deleteClassMutation(
              { classId },
              { onSuccess: () => onCloseModal?.() },
            )
          }
          color="text-red-50"
          backgroundColor="bg-red-700"
          backgroundHover="hover:bg-red-800"
        >
          {isDeletingClass ? <SmallSpinner /> : "Delete"}
        </Button>
        <Button onClick={() => onCloseModal?.()} primary={false}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default DeleteClass;
