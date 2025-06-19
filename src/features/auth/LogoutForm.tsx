import { useForm } from "react-hook-form";
import ShowPassword from "./ShowPassword";
import Button from "@/ui/Button";
import { Dispatch, SetStateAction } from "react";
import { useLogout } from "./useLogout";
import SmallSpinner from "@/ui/SmallSpinner";

interface LogoutTypes {
  setIsHover: Dispatch<SetStateAction<boolean>>;
  onCloseModal?: () => void;
}

function LogoutForm({ setIsHover, onCloseModal }: LogoutTypes) {
  const { register, formState, handleSubmit } = useForm();
  const { logoutMutation, isLoggingOut } = useLogout();
  const { password } = formState.errors;

  function onSubmit({ password }: { password?: string }) {
    if (password) logoutMutation({ password });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-8"
    >
      <h3 className="text-lg font-semibold">
        Please enter your password to log out from your account:
      </h3>
      <ShowPassword
        register={register}
        error={password?.message?.toString() || ""}
        forgotPassword={false}
      />
      <div className="flex items-center justify-center gap-5 place-self-end">
        <Button
          type="S"
          setIsHover={setIsHover}
          color="text-red-50"
          backgroundColor="bg-red-600"
          backgroundHover="bg-red-700"
        >
          {isLoggingOut ? <SmallSpinner /> : "Log out"}
        </Button>
        <Button primary={false} onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default LogoutForm;
