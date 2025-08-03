import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import { ClassTypes } from "@/utils/types";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditClass } from "./useEditClass";
import { useTranslation } from "react-i18next";

interface EditFormTypes {
  classData: ClassTypes;
  onCloseModal?: () => void;
}

function EditClassForm({ classData, onCloseModal }: EditFormTypes) {
  const { t } = useTranslation("classes");
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-800 rtl:flex rtl:items-center rtl:justify-center rtl:gap-2 dark:text-slate-100">
          {t("editClass.title")}
          <span className="ml-3 inline-block rounded-lg bg-indigo-100 px-2.5 py-1.5 align-middle text-sm font-semibold text-indigo-800 dark:bg-indigo-200">
            #{classData.id}
          </span>
        </h3>
      </div>

      <div className="space-y-8">
        <InputField<ClassTypes>
          error={errors?.className?.message?.toString() || ""}
          register={register}
          name="className"
          type="text"
          label={t("editClass.className")}
          initialValue={classData.className}
        />
        <InputField<ClassTypes>
          error={errors?.studentsNum?.message?.toString() || ""}
          register={register}
          name="studentsNum"
          type="number"
          label={t("editClass.studentsNum")}
          initialValue={String(classData.studentsNum)}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          type="S"
          color="text-violet-50"
          backgroundColor="bg-violet-600"
          backgroundHover="hover:bg-violet-700"
        >
          {isEditingClass ? <SmallSpinner /> : t("editClass.editButton")}
        </Button>
      </div>
    </form>
  );
}

export default EditClassForm;
