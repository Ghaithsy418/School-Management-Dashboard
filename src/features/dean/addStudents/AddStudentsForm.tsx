import ClearAll from "@/ui/ClearAll";
import InputField from "@/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { StudentTypes } from "@/utils/types";
import { useAddStudent } from "./useAddStudent";
import SmallSpinner from "@/ui/SmallSpinner";

function AddStudentsForm() {
  const { addStudentMutation, isAddingStudent } = useAddStudent();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<StudentTypes>();

  function onSubmit(data: StudentTypes) {
    return addStudentMutation(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="mt-6 flex flex-col justify-center gap-8"
    >
      <h3 className="text-3xl font-semibold">Student Data:</h3>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<StudentTypes>
          name="name"
          label="First Name"
          type="text"
          register={register}
          error={errors.name?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="middleName"
          label="Middle Name"
          type="text"
          register={register}
          error={errors.middleName?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="lastName"
          label="Last Name"
          type="text"
          register={register}
          error={errors.lastName?.message?.toString() || ""}
        />

        <InputField<StudentTypes>
          name="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="password"
          label="Password"
          type="text"
          autoComplete="off"
          register={register}
          error={errors.password?.message?.toString() || ""}
        />

        <InputField<StudentTypes>
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
          error={errors.phoneNumber?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="previousCertification"
          label="Previous Certification"
          type="file"
          accept=".pdf"
          register={register}
          error={errors.previousCertification?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="photo"
          label="Photo"
          type="file"
          accept=".png"
          register={register}
          error={errors.photo?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="class"
          label="Class"
          type="text"
          register={register}
          error={errors.class?.message?.toString() || ""}
        />
        <h3 className="text-3xl font-semibold">Parents Data:</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<StudentTypes>
          name="parentName"
          label="Parent First Name"
          type="text"
          register={register}
          error={errors.parentName?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="parentMiddleName"
          label="Parent Middle Name"
          type="text"
          register={register}
          error={errors.parentMiddleName?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="parentLastName"
          label="Parent Last Name"
          type="text"
          register={register}
          error={errors.parentLastName?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="parentPhoneNumber"
          label="Parent Phone Number"
          type="number"
          register={register}
          error={errors.parentPhoneNumber?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="email"
          id="parentEmail"
          label="Parent Email"
          type="email"
          register={register}
          error={errors.parentEmail?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="password"
          id="parentPassword"
          label="Parent Password"
          type="text"
          autoComplete="off"
          register={register}
          error={errors.parentPassword?.message?.toString() || ""}
        />
        <InputField<StudentTypes>
          name="parentJob"
          label="Parent Job"
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
          {isAddingStudent ? <SmallSpinner /> : "Add the Student"}
        </Button>
        <ClearAll clearFunction={reset} />
      </div>
    </form>
  );
}

export default AddStudentsForm;
