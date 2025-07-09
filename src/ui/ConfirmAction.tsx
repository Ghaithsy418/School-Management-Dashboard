// src/components/ConfirmAction.jsx

import { HiOutlineQuestionMarkCircle, HiOutlineCheck } from "react-icons/hi2";
import Button from "@/ui/Button";
import SmallSpinner from "@/ui/SmallSpinner";

interface ConfirmActionTypes {
  title: string;
  question: string;
  buttonText: string;
  onConfirm: () => void;
  isConfirming: boolean;
  onCloseModal?: () => void;
}

function ConfirmAction({
  title,
  question,
  buttonText,
  onConfirm,
  isConfirming,
}: ConfirmActionTypes) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <HiOutlineQuestionMarkCircle className="h-10 w-10 text-blue-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="max-w-md text-slate-500">{question}</p>
      </div>

      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={onConfirm}
          disabled={isConfirming}
          color="text-white"
          backgroundColor="bg-blue-600"
          backgroundHover="hover:bg-blue-700"
          className="w-full justify-center"
        >
          {isConfirming ? (
            <SmallSpinner />
          ) : (
            <div className="flex items-center gap-2">
              <HiOutlineCheck className="h-5 w-5" />
              <span>{buttonText}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmAction;
