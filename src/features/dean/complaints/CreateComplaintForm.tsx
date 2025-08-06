import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import Textarea from "@/ui/Textarea";
import { ComplaintTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";
import { useAddComplaint } from "./useAddComplaint";
import SmallSpinner from "@/ui/SmallSpinner";
import { Dispatch, SetStateAction } from "react";

function CreateComplaintForm({
  close,
  setUi,
}: {
  close: () => void;
  setUi: Dispatch<SetStateAction<string>>;
}) {
  const { register, handleSubmit, formState } = useForm<ComplaintTypes>();
  const { addComplaintMutation, isAddingComplaint } = useAddComplaint();
  const { errors } = formState;

  function onSubmit(data: ComplaintTypes) {
    addComplaintMutation(data, { onSuccess: () => close?.() });
  }

  return (
    <div className="flex w-full flex-col gap-5 px-4 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start justify-center gap-9"
      >
        <h4 className="place-self-center text-2xl font-bold">
          Add a Complaint
        </h4>
        <div className="flex w-full flex-col gap-7">
          <InputField<ComplaintTypes>
            register={register}
            name="category"
            label="Title"
            type="string"
            error={errors?.category?.message?.toString() || ""}
          />
          <Textarea<ComplaintTypes>
            register={register}
            name="complaint"
            label="Description"
            error={errors?.complaint?.message?.toString() || ""}
          />
          <SubmitButton
            size="w-full"
            className="flex items-center justify-center gap-3 place-self-center"
          >
            {" "}
            {isAddingComplaint ? (
              <SmallSpinner />
            ) : (
              <>
                <GrSend className="h-5 w-5" />
                Submit Complaint
              </>
            )}
          </SubmitButton>
        </div>
      </form>
      <div className="w-full border-t border-t-gray-700/20 pt-2">
        <button
          onClick={() => setUi("previousComplaints")}
          className="cursor-pointer text-xs font-light underline transition-all duration-300 hover:text-sky-700 hover:no-underline"
        >
          Show previous complaints
        </button>
      </div>
    </div>
  );
}

export default CreateComplaintForm;
