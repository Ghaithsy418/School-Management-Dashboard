import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import { useForm } from "react-hook-form";
import { IoAddCircleOutline } from "react-icons/io5";
import { useCreateSubject } from "./useCreateSubject";
import { SubjectTypes } from "@/utils/types";
import { useQueryClient } from "@tanstack/react-query";
import SmallSpinner from "@/ui/SmallSpinner";

function CreateSubject() {
  const { formState, handleSubmit, register } = useForm<SubjectTypes>();
  const queryClient = useQueryClient();
  const { createSubjectMutation, isCreatingSubject } = useCreateSubject();
  const { errors } = formState;

  function onSubmit(data: SubjectTypes) {
    return createSubjectMutation(data, {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["subjects", data.grade] }),
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
          register={register}
          error={errors?.subjectName?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="minMark"
          label="Min Mark"
          type="text"
          register={register}
          error={errors?.minMark?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="maxMark"
          label="Max Mark"
          type="text"
          register={register}
          error={errors?.maxMark?.message?.toString() || ""}
        />
        <InputField<SubjectTypes>
          name="grade"
          label="Grade"
          type="text"
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
