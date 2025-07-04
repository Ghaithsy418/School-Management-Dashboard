import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import SubmitButton from "@/ui/SubmitButton";
import Title from "@/ui/Title";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Controller, useForm } from "react-hook-form";
import ButtonResendCode from "./ButtonResendCode";
import { useConfirmValidationCode } from "./useConfirmValidationCode";
import SmallSpinner from "@/ui/SmallSpinner";
import { motion } from "framer-motion";
import { regularOpacityVariants } from "@/utils/variants";
import { useTranslation } from "react-i18next";
import { useLoginUi } from "@/slices/loginUiSlice";

function OtpInput() {
  const { control, handleSubmit, formState } = useForm();
  const { confirmMutation, isConfirming } = useConfirmValidationCode();
  const { email } = useLoginUi();
  const { t } = useTranslation("auth");
  const className =
    "border-gray-400 ring-gray-700 h-13 w-13 text-md text-inherit";
  const { otp: otpError } = formState.errors;

  function onSubmit(data: { otp?: number }) {
    if (data.otp) confirmMutation({ verificationCode: data.otp, email });
  }

  return (
    <motion.form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-11"
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title
        size="text-5xl"
        secondaryTitle={t("confirmCode.subTitle")}
        importantWord={email}
      >
        {t("confirmCode.title")}
      </Title>
      <div className="relative">
        <Controller
          name="otp"
          control={control}
          defaultValue=""
          rules={rulesObject}
          render={({ field }) => (
            <div dir="ltr">
              <InputOTP
                maxLength={5}
                {...field}
                autoFocus
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className={className} />
                  <InputOTPSlot index={1} className={className} />
                  <InputOTPSlot index={2} className={className} />
                  <InputOTPSlot index={3} className={className} />
                  <InputOTPSlot index={4} className={className} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          )}
        />
        {otpError?.message && (
          <p className="absolute right-3 -bottom-7 text-sm text-red-500">
            {"*" + otpError?.message?.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <SubmitButton size="w-90">
          {isConfirming ? <SmallSpinner /> : t("confirmCode.button")}
        </SubmitButton>
        <ButtonResendCode />
      </div>
    </motion.form>
  );
}

const rulesObject = {
  required: "Please enter the Validation code first!",
  minLength: { value: 5, message: "validation code should be 5 digits" },
};

export default OtpInput;
