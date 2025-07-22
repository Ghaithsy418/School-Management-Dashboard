import { useEffect } from "react"; // 1. Import useEffect
import Button from "@/ui/Button";
import ClearAll from "@/ui/ClearAll";
import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import { useAddSupervisor } from "./useAddSupervisor";
import { useAddTeacher } from "./useAddTeacher";

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
  const { addSupervisorMutation, isAddingSupervisor } = useAddSupervisor();
  const { addTeacherMutation, isAddingTeacher } = useAddTeacher();

  // The 'values' option is removed from here as useEffect will handle it.
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TeacherSupervisorTypes>();

  // 2. Add the useEffect hook
  useEffect(() => {
    if (csvData) {
      // 3. Call reset with the new data from the prop
      reset({
        ...csvData, // Spread the new data from the prop
        // Also include default values for fields not in csvData
        password: "",
        salary: 0,
        subject: "",
        certification: null as unknown as FileList,
        photo: null as unknown as FileList,
      });
    }
  }, [csvData, reset]); // Dependency array ensures this runs when csvData or reset changes

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
      {/* ... The rest of your form JSX remains the same ... */}
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
              message: "Phone number can't be shorter than 10 digits",
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
