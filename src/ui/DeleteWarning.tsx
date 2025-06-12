import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

function DeleteWarning({ onCloseModal, setIsHover }: DeleteTypes) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl">Are you sure you want to delete this?!</h3>
      <div className="flex items-center justify-end gap-4">
        <Button setIsHover={setIsHover} primary={false}>
          Yes, I am sure!
        </Button>
        <Button
          color="text-red-50"
          backgroundColor="bg-red-700"
          backgroundHover="hover:bg-red-800/90"
          onClick={() => onCloseModal?.()}
        >
          No, Just cancel
        </Button>
      </div>
    </div>
  );
}

interface DeleteTypes {
  onCloseModal?: () => void;
  setIsHover: Dispatch<SetStateAction<boolean>>;
}

export default DeleteWarning;
