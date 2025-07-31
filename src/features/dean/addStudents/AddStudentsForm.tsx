import ClearAll from "@/ui/ClearAll";
import InputField from "@/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { AddStudentTypes } from "@/utils/types";
import { useAddStudent } from "./useAddStudent";
import SmallSpinner from "@/ui/SmallSpinner";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

function AddStudentsForm() {
  const { t } = useTranslation("students");
  const { addStudentMutation, isAddingStudent } = useAddStudent();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<AddStudentTypes>();

  function onSubmit(data: AddStudentTypes) {
    return addStudentMutation(data, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries({ queryKey: ["students"] });
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="mt-6 flex flex-col justify-center gap-8"
    >
      <h3 className="text-3xl font-semibold">{t("addStudents.studentData")}</h3>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<AddStudentTypes>
          name="name"
          label={t("addStudents.firstName")}
          type="text"
          register={register}
          error={errors.name?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="middleName"
          label={t("addStudents.middleName")}
          type="text"
          register={register}
          error={errors.middleName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="lastName"
          label={t("addStudents.lastName")}
          type="text"
          register={register}
          error={errors.lastName?.message?.toString() || ""}
        />

        <InputField<AddStudentTypes>
          name="email"
          label={t("addStudents.email")}
          type="email"
          register={register}
          error={errors.email?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="password"
          label="Password"
          type="text"
          autoComplete="off"
          register={register}
          error={errors.password?.message?.toString() || ""}
        />

        <InputField<AddStudentTypes>
          name="phoneNumber"
          label={t("addStudents.phone")}
          inputValidation={{
            required: t("addStudents.phoneValidation"),
            min: {
              value: 10,
              message: t("addStudents.phoneNumsValidation"),
            },
          }}
          type="number"
          autoComplete="off"
          register={register}
          error={errors.phoneNumber?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="previousCertification"
          label={t("addStudents.previousCertification")}
          type="file"
          accept=".pdf"
          register={register}
          error={errors.previousCertification?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="photo"
          label={t("addStudents.photo")}
          type="file"
          accept=".png"
          register={register}
          error={errors.photo?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="class"
          label={t("addStudents.class")}
          type="text"
          register={register}
          error={errors.class?.message?.toString() || ""}
          inputValidation={() => {}}
        />
        <h3 className="text-3xl font-semibold">
          {t("addStudents.parentData")}
        </h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<AddStudentTypes>
          name="parentName"
          label={t("addStudents.parentFirstName")}
          type="text"
          register={register}
          error={errors.parentName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentMiddleName"
          label={t("addStudents.parentMiddleName")}
          type="text"
          register={register}
          error={errors.parentMiddleName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentLastName"
          label={t("addStudents.parentLastName")}
          type="text"
          register={register}
          error={errors.parentLastName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentPhoneNumber"
          label={t("addStudents.parentPhone")}
          type="number"
          register={register}
          error={errors.parentPhoneNumber?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="email"
          id="parentEmail"
          label={t("addStudents.parentEmail")}
          type="email"
          register={register}
          error={errors.parentEmail?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="password"
          id="parentPassword"
          label="Parent Password"
          type="text"
          autoComplete="off"
          register={register}
          error={errors.parentPassword?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentJob"
          label={t("addStudents.parentJob")}
          type="text"
          register={register}
          error={errors.parentJob?.message?.toString() || ""}
        />
      </div>
      <div className="flex items-center justify-center gap-5 place-self-end">
        <Button
          size="big"
          type="S"
          color="text-violet-50"
          backgroundColor="bg-violet-600"
          backgroundHover="hover:bg-violet-700"
        >
          {isAddingStudent ? (
            <SmallSpinner />
          ) : (
            t("addStudents.addStudentButton")
          )}
        </Button>
        <ClearAll clearFunction={reset} />
      </div>
    </form>
  );
}

export default AddStudentsForm;
