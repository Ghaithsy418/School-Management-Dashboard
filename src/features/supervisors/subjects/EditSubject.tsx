import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import { FileEdit } from "lucide-react";
import { useForm } from "react-hook-form";

function EditSubject() {
  const { formState, handleSubmit, register } = useForm();
  const { errors } = formState;

  return (
    <div className="w-full gap-6 space-y-7 rounded-xl px-5 py-8 shadow-md ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center justify-start gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
          <FileEdit className="h-6 w-6 text-yellow-600" />
        </span>
        <h3 className="text-lg font-semibold">Edit the Subject</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7">
        <InputField
          name="subjectName"
          label="Subject Name"
          type="text"
          register={register}
          error={errors?.subjectName?.message?.toString() || ""}
        />
        <InputField
          name="minMark"
          label="Min Mark"
          type="text"
          register={register}
          error={errors?.minMark?.message?.toString() || ""}
        />
        <InputField
          name="maxMark"
          label="Max Mark"
          type="text"
          register={register}
          error={errors?.maxMark?.message?.toString() || ""}
        />
        <SubmitButton size="w-full">Edit</SubmitButton>
      </div>
    </div>
  );
}

export default EditSubject;
