import Title from "@/ui/Title";
import ShowPassword from "../ShowPassword";
import { useForm } from "react-hook-form";
import SubmitButton from "@/ui/SubmitButton";
import toast from "react-hot-toast";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNewPassword } from "./useNewPassword";
import SmallSpinner from "@/ui/SmallSpinner";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";
import { useTranslation } from "react-i18next";
import { useLoginUi } from "@/slices/loginUiSlice";

function NewPasswordForm() {
  const { register, handleSubmit, formState } = useForm();
  const { email } = useLoginUi();
  const { newPasswordMutation, isChangingPassword } = useNewPassword();
  const { t } = useTranslation("auth");
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
      <Title size="text-5xl" secondaryTitle={t("newPassword.subTitle")}>
        {t("newPassword.title")}
      </Title>

      <ShowPassword
        error={passwordError?.message?.toString() || ""}
        register={register}
        label={t("newPassword.newPassword")}
        forgotPassword={false}
        id="newPassword"
      />
      <ShowPassword
        error={confirmPasswordError?.message?.toString() || ""}
        register={register}
        label={t("newPassword.confirmPassword")}
        forgotPassword={false}
        id="confirmPassword"
      />
      <SubmitButton marginTop="-mt-2">
        {isChangingPassword ? <SmallSpinner /> : t("newPassword.button")}
      </SubmitButton>
    </motion.form>
  );
}

export default NewPasswordForm;
