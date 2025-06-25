import InputField from "@/ui/InputField";
import { ClassTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { useEditClass } from "./useEditClass";
import SmallSpinner from "@/ui/SmallSpinner";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

interface EditFormTypes {
  classData: ClassTypes;
  onCloseModal?: () => void;
  setIsHover: Dispatch<SetStateAction<boolean>>;
}

function EditClassForm({ classData, onCloseModal, setIsHover }: EditFormTypes) {
  const { register, formState, handleSubmit } = useForm<ClassTypes>();
  const { editClassMutation, isEditingClass } = useEditClass();
  const queryClient = useQueryClient();

  const { errors } = formState;
  function onSubmit(data: { className: string; studentsNum: number }) {
    if (data.studentsNum < classData.currentStudentNumber)
      return toast.error(
        "The allowed size can't be smaller than the current number of Students",
      );

    return editClassMutation(
      {
        ...data,
        classId: classData.id,
        currentStudentNumber: classData.currentStudentNumber,
      },
      {
        onSuccess: () => {
          onCloseModal?.();
          queryClient.invalidateQueries({ queryKey: ["classes"] });
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-8"
    >
      <h3 className="text-lg font-semibold">Edit Class #{classData.id}</h3>
      <InputField<ClassTypes>
        error={errors?.className?.toString() || ""}
        register={register}
        name="className"
        type="text"
        label="Class Name"
        initialValue={classData.className}
      />
      <InputField<ClassTypes>
        error={errors?.studentsNum?.toString() || ""}
        register={register}
        name="studentsNum"
        type="text"
        label="Students Number"
        initialValue={String(classData.studentsNum)}
      />

      <div className="flex items-end justify-center gap-5 place-self-end">
        <Button
          type="S"
          color="text-violet-50"
          backgroundColor="bg-violet-600"
          backgroundHover="hover:bg-violet-700"
          setIsHover={setIsHover}
        >
          {isEditingClass ? <SmallSpinner /> : "Edit"}
        </Button>
        <Button onClick={() => onCloseModal?.()} primary={false}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default EditClassForm;
