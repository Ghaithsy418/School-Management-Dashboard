import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import ShowPassword from "./ShowPassword";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { email: emailError, password: passwordError } = formState.errors;

  function onSubmit(data: { email?: string; password?: string }) {
    console.log({ ...data });
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center justify-center gap-16 rounded-md px-4 py-3"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <motion.h1
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 110, damping: 6 },
          }}
          className="bg-gradient-to-br from-indigo-600/80 via-indigo-700/90 to-violet-900/90 bg-clip-text text-7xl font-bold text-transparent"
        >
          Welcome!
        </motion.h1>
        <p className="text-gray-950/90">Please login to start using the App</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-9"
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

        <button className="w-96 cursor-pointer rounded-md bg-gradient-to-tr from-indigo-500 to-violet-600 py-2 text-lg tracking-wide text-gray-50 hover:from-indigo-500/90 hover:to-violet-600/90">
          Login
        </button>
      </form>
    </motion.div>
  );
}

const variants = {
  hidden: { opacity: 0, x: "75%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.5 } },
};

export default LoginForm;
