import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import { ClassTypes } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useCreateClass } from "./useCreateClass";
import { useQueryClient } from "@tanstack/react-query";

interface CreateClassTypes {
  setIsHover: Dispatch<SetStateAction<boolean>>;
  onCloseModal?: () => void;
}

function CreateClassForm({ setIsHover, onCloseModal }: CreateClassTypes) {
  const { register, handleSubmit, formState } = useForm<ClassTypes>();
  const { createClassMutation, isCreatingClass } = useCreateClass();
  const queryClient = useQueryClient();

  const { errors } = formState;

  function onSubmit(data: { className: string; studentsNum: number }) {
    createClassMutation(data, {
      onSuccess: () => {
        onCloseModal?.();
        queryClient.invalidateQueries({ queryKey: ["classes"] });
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-8"
    >
      <h3 className="text-lg font-semibold">Create a new class:</h3>
      <InputField<ClassTypes>
        error={errors?.className?.toString() || ""}
        register={register}
        name="className"
        type="text"
        label="Class Name (example: 10-A)"
      />
      <InputField<ClassTypes>
        error={errors?.studentsNum?.toString() || ""}
        register={register}
        name="studentsNum"
        type="text"
        label="Students Number"
      />

      <div className="flex items-end justify-center gap-5 place-self-end">
        <Button
          type="S"
          color="text-violet-50"
          backgroundColor="bg-violet-600"
          backgroundHover="hover:bg-violet-700"
          setIsHover={setIsHover}
        >
          {isCreatingClass ? <SmallSpinner /> : "Create"}
        </Button>
        <Button onClick={() => onCloseModal?.()} primary={false}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default CreateClassForm;
