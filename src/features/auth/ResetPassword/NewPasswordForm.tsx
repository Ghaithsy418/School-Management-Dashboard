import Title from "@/ui/Title";
import ShowPassword from "../ShowPassword";
import { useForm } from "react-hook-form";
import SubmitButton from "@/ui/SubmitButton";
import toast from "react-hot-toast";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNewPassword } from "./useNewPassword";
import { useLoginUi } from "@/context/LoginUIs";
import SmallSpinner from "@/ui/SmallSpinner";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";

function NewPasswordForm() {
  const { register, handleSubmit, formState } = useForm();
  const { email } = useLoginUi();
  const { newPasswordMutation, isChangingPassword } = useNewPassword();
  const { newPassword: passwordError, confirmPassword: confirmPasswordError } =
    formState.errors;

  function onSubmit(data: { newPassword?: string; confirmPassword?: string }) {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match", {
        icon: <RiLockPasswordFill className="h-6 w-6 text-red-600" />,
      });
      return;
    }
    if (data.newPassword && data.confirmPassword) {
      newPasswordMutation({ email, password: data.newPassword });
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="flex flex-col items-center justify-center gap-10"
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: "-60%", transition: { duration: 1 } }}
    >
      <Title
        size="text-5xl"
        secondaryTitle="choose your new password (make sure to be strong)"
      >
        Set New Password
      </Title>

      <ShowPassword
        error={passwordError?.message?.toString() || ""}
        register={register}
        label="New Password"
        forgotPassword={false}
        id="newPassword"
      />
      <ShowPassword
        error={confirmPasswordError?.message?.toString() || ""}
        register={register}
        label="Confirm Password"
        forgotPassword={false}
        id="confirmPassword"
      />
      <SubmitButton marginTop="-mt-2">
        {isChangingPassword ? <SmallSpinner /> : "Submit Password"}
      </SubmitButton>
    </motion.form>
  );
}

export default NewPasswordForm;
