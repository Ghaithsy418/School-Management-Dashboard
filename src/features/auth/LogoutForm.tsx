import SmallSpinner from "@/ui/SmallSpinner";
import { motion } from "framer-motion";
import { HiLogout } from "react-icons/hi";
import { useLogout } from "./useLogout";
import { useTranslation } from "react-i18next";

function LogoutForm() {
  const { logoutMutation, isLoggingOut } = useLogout();
  const { t } = useTranslation("auth");

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      method="delete"
      onSubmit={(e) => {
        e.preventDefault();
        logoutMutation();
      }}
      className="flex flex-col items-center gap-6 p-6"
    >
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        {t("logout.title")}
      </h2>
      <p className="text-center leading-relaxed text-slate-600 dark:text-slate-300">
        {t("logout.message")}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoggingOut}
        type="submit"
        className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoggingOut ? <SmallSpinner /> : <HiLogout className="text-lg" />}
        <span>
          {isLoggingOut ? t("logout.loadingLogout") : t("logout.logoutButton")}
        </span>
      </motion.button>
    </motion.form>
  );
}

export default LogoutForm;
