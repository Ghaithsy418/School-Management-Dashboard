import { useState } from "react";
import InputField from "../../ui/InputField";
import RoleSelector from "./RoleSelector";
import ShowPassword from "./ShowPassword";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function LoginForm() {
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { email: emailError, password: passwordError } = formState.errors;

  function onSubmit(data: { email?: string; password?: string }) {
    if (!role) {
      setRoleError(true);
      return;
    }
    setRoleError(false);
    console.log({ ...data, role });
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center justify-center gap-16 rounded-md px-4 py-3"
    >
      <div className="flex flex-col items-center justify-center gap-2">
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
        <RoleSelector role={role} setRole={setRole} roleError={roleError} />
        {/* <select className="role-select mb-3 w-96 rounded-md px-2 py-3 outline-1 outline-gray-700/20">
          {options.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </select> */}
        <button className="w-96 cursor-pointer rounded-md bg-gradient-to-tr from-indigo-500 to-violet-600 py-2 text-lg tracking-wide text-gray-50 transition-all duration-300 hover:from-indigo-500/90 hover:to-violet-600/90">
          Login
        </button>
      </form>
    </motion.div>
  );
}

const variants = {
  hidden: { opacity: 0, x: "75%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6 } },
};

export default LoginForm;
