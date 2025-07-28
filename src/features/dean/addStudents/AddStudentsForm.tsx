import ClearAll from "@/ui/ClearAll";
import InputField from "@/ui/InputField";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { AddStudentTypes } from "@/utils/types";
import { useAddStudent } from "./useAddStudent";
import SmallSpinner from "@/ui/SmallSpinner";
import { useQueryClient } from "@tanstack/react-query";

function AddStudentsForm() {
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
      <h3 className="text-3xl font-semibold">Student Data:</h3>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<AddStudentTypes>
          name="name"
          label="First Name"
          type="text"
          register={register}
          error={errors.name?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="middleName"
          label="Middle Name"
          type="text"
          register={register}
          error={errors.middleName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="lastName"
          label="Last Name"
          type="text"
          register={register}
          error={errors.lastName?.message?.toString() || ""}
        />

        <InputField<AddStudentTypes>
          name="email"
          label="Email"
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
        <InputField<AddStudentTypes>
          name="previousCertification"
          label="Previous Certification"
          type="file"
          accept=".pdf"
          register={register}
          error={errors.previousCertification?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="photo"
          label="Photo"
          type="file"
          accept=".png"
          register={register}
          error={errors.photo?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="class"
          label="Class"
          type="text"
          register={register}
          error={errors.class?.message?.toString() || ""}
          inputValidation={() => {}}
        />
        <h3 className="text-3xl font-semibold">Parents Data:</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 items-center justify-center gap-12">
        <InputField<AddStudentTypes>
          name="parentName"
          label="Parent First Name"
          type="text"
          register={register}
          error={errors.parentName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentMiddleName"
          label="Parent Middle Name"
          type="text"
          register={register}
          error={errors.parentMiddleName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentLastName"
          label="Parent Last Name"
          type="text"
          register={register}
          error={errors.parentLastName?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="parentPhoneNumber"
          label="Parent Phone Number"
          type="number"
          register={register}
          error={errors.parentPhoneNumber?.message?.toString() || ""}
        />
        <InputField<AddStudentTypes>
          name="email"
          id="parentEmail"
          label="Parent Email"
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
