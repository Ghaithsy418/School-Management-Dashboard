import { useEffect } from "react"; // 1. Import useEffect
import Button from "@/ui/Button";
import ClearAll from "@/ui/ClearAll";
import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import { useAddSupervisor } from "./useAddSupervisor";
import { useAddTeacher } from "./useAddTeacher";
import { useTranslation } from "react-i18next";
import { useAddOtherUser } from "./othersRole/useAddOtherUser";

interface CsvDataTypes {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
interface AddTypes {
  role: string;
  csvData: CsvDataTypes;
}

function AddTeachersSupervisorsForm({ role, csvData }: AddTypes) {
  const { t } = useTranslation("supervisors");
  const { addSupervisorMutation, isAddingSupervisor } = useAddSupervisor();
  const { addTeacherMutation, isAddingTeacher } = useAddTeacher();
  const { addOtherUserMutation, isAddingOtherUser } = useAddOtherUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TeacherSupervisorTypes>();

  useEffect(() => {
    if (csvData) {
      reset({
        ...csvData,
        salary: 0,
        subject: "",
        certification: null as unknown as FileList,
        photo: null as unknown as FileList,
      });
    }
  }, [csvData, reset]);

  function onSubmit(data: TeacherSupervisorTypes) {
    if (role === "teacher")
      return addTeacherMutation(data, { onSuccess: () => reset() });
    if (role === "supervisor")
      return addSupervisorMutation(data, { onSuccess: () => reset() });
    if (role === "others")
      return addOtherUserMutation(data, { onSuccess: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="mt-6 flex flex-col justify-center gap-10"
    >
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<TeacherSupervisorTypes>
          name="name"
          label={t("addSupervisor.firstName")}
          type="text"
          register={register}
          error={errors.name?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="middleName"
          label={t("addSupervisor.middleName")}
          type="text"
          register={register}
          error={errors.middleName?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="lastName"
          label={t("addSupervisor.lastName")}
          type="text"
          register={register}
          error={errors.lastName?.message || ""}
        />

        <InputField<TeacherSupervisorTypes>
          name="email"
          label={t("addSupervisor.email")}
          type="email"
          register={register}
          error={errors.email?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="phoneNumber"
          label={t("addSupervisor.phone")}
          inputValidation={{
            required: t("addSupervisor.phoneValidation"),
            min: {
              value: 10,
              message: t("addSupervisor.phoneNumsValidation"),
            },
          }}
          type="number"
          autoComplete="off"
          register={register}
          error={errors.phoneNumber?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="certification"
          label={t("addSupervisor.certification")}
          type="file"
          accept=".pdf"
          register={register}
          error={errors.certification?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="photo"
          label={t("addSupervisor.photo")}
          type="file"
          accept=".png"
          register={register}
          error={errors.photo?.message || ""}
        />
        {role === "teacher" && (
          <InputField<TeacherSupervisorTypes>
            name="subject"
            label={t("addSupervisor.subject")}
            type="text"
            register={register}
            error={errors.subject?.message || ""}
          />
        )}
        <InputField<TeacherSupervisorTypes>
          name="salary"
          label={t("addSupervisor.salary")}
          type="number"
          inputValidation={{
            required: "Salary is required",
            pattern: {
              value: /^\d{1,5}(\.\d{1,2})?$/,
              message:
                "Salary should be positive and equal or less than 99999.99$",
            },
          }}
          register={register}
          error={errors.salary?.message || ""}
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
          {isAddingSupervisor || isAddingTeacher || isAddingOtherUser ? (
            <SmallSpinner />
          ) : role === "supervisor" ? (
            t("addSupervisor.addSupervisorButton") +
            t("addSupervisor.supervisor")
          ) : role === "teacher" ? (
            t("addSupervisor.addSupervisorButton") + t("addSupervisor.teacher")
          ) : (
            "Add User"
          )}
        </Button>
        <ClearAll clearFunction={reset} />
      </div>
    </form>
  );
}

export default AddTeachersSupervisorsForm;
