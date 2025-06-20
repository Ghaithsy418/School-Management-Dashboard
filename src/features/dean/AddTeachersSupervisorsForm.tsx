import InputField from "@/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import ClearAll from "@/ui/ClearAll";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useAddSupervisor } from "./useAddSupervisor";
import { useAddTeacher } from "./useAddTeacher";
import SmallSpinner from "@/ui/SmallSpinner";

function AddTeachersSupervisorsForm({ role }: { role: string }) {
  const { addSupervisorMutation, isAddingSupervisor } = useAddSupervisor();
  const { addTeacherMutation, isAddingTeacher } = useAddTeacher();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TeacherSupervisorTypes>();

  function onSubmit(data: TeacherSupervisorTypes) {
    if (role === "teacher")
      return addTeacherMutation(data, { onSuccess: () => reset() });
    if (role === "supervisor")
      return addSupervisorMutation(data, { onSuccess: () => reset() });
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
          label="First Name"
          type="text"
          register={register}
          error={errors.name?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="middleName"
          label="Middle Name"
          type="text"
          register={register}
          error={errors.middleName?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="lastName"
          label="Last Name"
          type="text"
          register={register}
          error={errors.lastName?.message || ""}
        />

        <InputField<TeacherSupervisorTypes>
          name="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="password"
          label="Password"
          type="text"
          autoComplete="off"
          register={register}
          error={errors.password?.message || ""}
        />

        <InputField<TeacherSupervisorTypes>
          name="phoneNumber"
          label="Phone Number"
          inputValidation={{
            required: "Phone number is required",
            min: {
              value: 10,
              message: "Phone number can't be lower than 10 number",
            },
          }}
          type="number"
          autoComplete="off"
          register={register}
          error={errors.phoneNumber?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="certification"
          label="Certification"
          type="file"
          accept=".pdf"
          register={register}
          error={errors.certification?.message || ""}
        />
        <InputField<TeacherSupervisorTypes>
          name="photo"
          label="Photo"
          type="file"
          accept=".png"
          register={register}
          error={errors.photo?.message || ""}
        />
        {role === "teacher" && (
          <InputField<TeacherSupervisorTypes>
            name="subject"
            label="Subject"
            type="text"
            register={register}
            error={errors.subject?.message || ""}
          />
        )}
        <InputField<TeacherSupervisorTypes>
          name="salary"
          label="Salary"
          type="number"
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
          {isAddingSupervisor || isAddingTeacher ? (
            <SmallSpinner />
          ) : (
            "Add the " + role[0].toUpperCase() + role.slice(1)
          )}
        </Button>
        <ClearAll clearFunction={reset} />
      </div>
    </form>
  );
}

export default AddTeachersSupervisorsForm;
