import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import SubmitButton from "@/ui/SubmitButton";
import { SubjectTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import { IoAddCircleOutline } from "react-icons/io5";
import { useCreateSubject } from "./useCreateSubject";

function CreateSubject() {
  const { formState, handleSubmit, register, reset } = useForm<SubjectTypes>();
  const { createSubjectMutation, isCreatingSubject } = useCreateSubject();
  const { errors } = formState;

  function onSubmit(data: SubjectTypes) {
    return createSubjectMutation(data, {
      onSuccess: () => reset(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-6 space-y-7 rounded-xl px-5 py-8 shadow-md ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-start gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
          <IoAddCircleOutline className="h-6 w-6 text-green-600" />
        </span>
        <h3 className="text-lg font-semibold">Create a Subject</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7">
        <InputField<SubjectTypes>
          name="subjectName"
          label="Subject Name"
          type="text"
          autoComplete="off"
          register={register}
          error={errors?.subjectName?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="minMark"
          label="Min Mark"
          type="text"
          autoComplete="off"
          register={register}
          error={errors?.minMark?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="maxMark"
          label="Max Mark"
          type="text"
          autoComplete="off"
          register={register}
          error={errors?.maxMark?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="grade"
          label="Grade"
          type="number"
          autoComplete="off"
          register={register}
          inputValidation={{
            required: `Grade is required`,
            validate: {
              minLength: (value: string) =>
                Number(value) >= 1 || "Grade should be more than 0",
              maxLength: (value: string) =>
                Number(value) <= 12 || "Grade should be less or equal than 12",
            },
          }}
          error={errors?.grade?.message?.toString() || ""}
        />
        <SubmitButton>
          {isCreatingSubject ? <SmallSpinner /> : "Create the Subject"}
        </SubmitButton>
      </div>
    </form>
  );
}

export default CreateSubject;
