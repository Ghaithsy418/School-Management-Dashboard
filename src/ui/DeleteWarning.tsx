import { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import { useDeleteUser } from "@/features/dean/useDeleteUser";
import SmallSpinner from "./SmallSpinner";

function DeleteWarning({ onCloseModal, setIsHover, user_id }: DeleteTypes) {
  const { deleteUserMutation, isDeletingUser } = useDeleteUser("student");
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl">Are you sure you want to delete this?!</h3>
      <div className="flex items-center justify-end gap-4">
        <Button
          onClick={() =>
            deleteUserMutation(
              { user_id },
              { onSuccess: () => onCloseModal?.() },
            )
          }
          setIsHover={setIsHover}
          color="text-red-50"
          backgroundColor="bg-red-700"
          backgroundHover="hover:bg-red-800/90"
        >
          {isDeletingUser ? <SmallSpinner /> : "Yes, I am sure!"}
        </Button>
        <Button primary={false} onClick={() => onCloseModal?.()}>
          No, Just cancel
        </Button>
      </div>
    </div>
  );
}

interface DeleteTypes {
  onCloseModal?: () => void;
  setIsHover: Dispatch<SetStateAction<boolean>>;
  user_id: number;
}

export default DeleteWarning;
