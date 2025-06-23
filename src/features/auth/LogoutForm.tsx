import Button from "@/ui/Button";
import SmallSpinner from "@/ui/SmallSpinner";
import { Dispatch, SetStateAction } from "react";
import { useLogout } from "./useLogout";

interface LogoutTypes {
  setIsHover: Dispatch<SetStateAction<boolean>>;
  onCloseModal?: () => void;
}

function LogoutForm({ setIsHover, onCloseModal }: LogoutTypes) {
  const { logoutMutation, isLoggingOut } = useLogout();

  return (
    <form
      method="delete"
      onSubmit={(e) => {
        e.preventDefault();
        logoutMutation();
      }}
      className="flex flex-col justify-center gap-8"
    >
      <h3 className="text-lg font-semibold">
        Are you sure you want to logout from your account?
      </h3>

      <div className="flex items-center justify-center gap-5 place-self-end">
        <Button
          type="S"
          setIsHover={setIsHover}
          color="text-red-50"
          backgroundColor="bg-red-700"
          backgroundHover="hover:bg-red-800"
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
