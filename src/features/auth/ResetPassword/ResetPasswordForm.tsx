import { useForm } from "react-hook-form";
import InputField from "../../../ui/InputField";
import SmallSpinner from "../../../ui/SmallSpinner";
import SubmitButton from "../../../ui/SubmitButton";
import Title from "../../../ui/Title";
import { useSendResetPassword } from "./useSendResetPassword";
import { useLoginUi } from "@/context/LoginUIs";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";
import { useTranslation } from "react-i18next";

function ResetPasswordForm() {
  const { register, handleSubmit, formState } = useForm();
  const { resetMutation, isResending } = useSendResetPassword();
  const { dispatch } = useLoginUi();
  const { t } = useTranslation("auth");
  const { email: emailError } = formState.errors;

  function onSubmit(data: { email?: string }) {
    if (data.email) {
      resetMutation({ email: data.email });
      dispatch({ type: "changeEmail", payload: data.email });
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      variants={regularOpacityVariants}
      method="post"
      initial="hidden"
      animate="visible"
      exit="exit"
      className="gap- flex flex-col items-center justify-center gap-8"
    >
      <Title size="text-5xl" secondaryTitle={t("resetPassword.subTitle")}>
        {t("resetPassword.title")}
      </Title>
      <InputField
        error={emailError?.message?.toString() || ""}
        register={register}
        name="email"
        label={t("resetPassword.email")}
        type="email"
      />
      <SubmitButton>
        {isResending ? <SmallSpinner /> : t("resetPassword.button")}
      </SubmitButton>
    </motion.form>
  );
}

export default ResetPasswordForm;
