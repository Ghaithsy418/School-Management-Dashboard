import { changeUi, useSubjectsUi } from "@/slices/SubjectUiSlice";
import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import { FileEdit } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEditSubject } from "./useEditSubject";
import SmallSpinner from "@/ui/SmallSpinner";

interface EditSubjectTypes {
  maxMark: number;
  minMark: number;
}

function EditSubject() {
  const {
    subject: { minMark, maxMark, id },
  } = useSubjectsUi();
  const { editSubjectMutation, isEditingSubject } = useEditSubject();
  const { formState, handleSubmit, register, reset } =
    useForm<EditSubjectTypes>({
      values: {
        minMark,
        maxMark,
      },
    });
  const dispatch = useDispatch();
  const { errors } = formState;

  function onSubmit(data: EditSubjectTypes) {
    editSubjectMutation({ ...data, id }, { onSuccess: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-6 space-y-7 rounded-xl px-5 pt-8 pb-6 shadow-md ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-start gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
          <FileEdit className="h-6 w-6 text-yellow-600" />
        </span>
        <h3 className="text-lg font-semibold">Edit the Subject</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7">
        <InputField<EditSubjectTypes>
          name="minMark"
          label="Min Mark"
          type="text"
          register={register}
          error={errors?.minMark?.message?.toString() || ""}
        />
        <InputField<EditSubjectTypes>
          name="maxMark"
          label="Max Mark"
          type="text"
          register={register}
          error={errors?.maxMark?.message?.toString() || ""}
        />
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <SubmitButton>
            {isEditingSubject ? <SmallSpinner /> : "Edit"}
          </SubmitButton>
          <button
            onClick={() => dispatch(changeUi("create"))}
            className="w-full cursor-pointer text-sm text-slate-600 underline transition-all duration-300 hover:text-slate-700 hover:no-underline"
          >
            Or create a subject
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditSubject;
