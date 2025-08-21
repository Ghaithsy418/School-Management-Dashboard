import { useUser } from "@/slices/userSlice";
import AvatarGenerator from "@/ui/AvatarGenerator";
import { OtherUsersTypes } from "@/utils/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ManagePermissions from "./ManagePermissions";

interface CardTypes {
  user: OtherUsersTypes;
}

function OthersCard({ user }: CardTypes) {
  const { t } = useTranslation();
  const { full_name, email, user_id, permission } = user;
  const {
    user: { role },
  } = useUser();

  return (
    <motion.div
      className="group relative flex w-[16.5rem] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/40 dark:border-slate-600 dark:bg-gray-800 dark:shadow-xs dark:hover:shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 150, damping: 20 }}
    >
      <div className="h-20 shrink-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700" />
      <div className="absolute top-[80px] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <AvatarGenerator
          name={full_name}
          size={80}
          className="ring-4 ring-white dark:ring-gray-800"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between p-6 pt-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {full_name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              {email}
            </p>
          </div>
          <div className="flex h-6 flex-wrap items-center justify-center gap-3">
            {permission.length > 0 ? (
              permission.map((per) => (
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800 capitalize dark:bg-indigo-800 dark:text-indigo-50">
                  {per}
                </span>
              ))
            ) : (
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800 capitalize dark:bg-indigo-800 dark:text-indigo-50">
                no permissions yet
              </span>
            )}
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3">
          <ManagePermissions
            currentPermissions={permission}
            full_name={full_name}
            user_id={user_id}
          />
          <Link
            to={`/${role}/others/${user_id}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-indigo-400 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            <FaRegUser className="h-4 w-4" />
            {t("cards.cardButton")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default OthersCard;
