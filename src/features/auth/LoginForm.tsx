import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import ShowPassword from "./ShowPassword";
import { useLogin } from "./useLogin";
import Title from "../../ui/Title";
import SubmitButton from "../../ui/SubmitButton";
import SmallSpinner from "@/ui/SmallSpinner";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { email: emailError, password: passwordError } = formState.errors;
  const { loginMutation, isLoggingIn } = useLogin();

  function onSubmit(data: { email?: string; password?: string }) {
    if (data.email && data.password)
      loginMutation({ email: data.email, password: data.password });
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex w-full flex-col items-center justify-center gap-16 rounded-md px-4 py-3"
    >
      <Title secondaryTitle="Please login to start using the App">
        Welcome!
      </Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-8"
      >
        <InputField
          name="email"
          type="text"
          label="Email"
          error={emailError?.message?.toString() || ""}
          register={register}
        />
        <ShowPassword
          register={register}
          error={passwordError?.message?.toString() || ""}
        />
        <SubmitButton marginTop="mt-3">
          {isLoggingIn ? <SmallSpinner /> : "Login"}
        </SubmitButton>
      </form>
    </motion.div>
  );
}

const variants = {
  hidden: { opacity: 0, x: "75%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default LoginForm;
