import InputField from "@/ui/InputField";
import SmallSpinner from "@/ui/SmallSpinner";
import { ClassTypes } from "@/utils/types";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";
import { useCreateClass } from "./useCreateClass";
import { useTranslation } from "react-i18next";

interface CreateClassTypes {
  onCloseModal?: () => void;
}

function CreateClassForm({ onCloseModal }: CreateClassTypes) {
  const { t } = useTranslation("classes");
  const { register, handleSubmit, formState } = useForm<ClassTypes>();
  const { createClassMutation, isCreatingClass } = useCreateClass();
  const queryClient = useQueryClient();

  const { errors } = formState;

  function onSubmit(data: { className: string; studentsNum: number }) {
    createClassMutation(data, {
      onSuccess: () => {
        onCloseModal?.();
        queryClient.invalidateQueries({ queryKey: ["classes"] });
      },
    });
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        {t("createClass.title")}
      </h2>

      <div className="space-y-8">
        <InputField<ClassTypes>
          error={errors?.className?.message?.toString() || ""}
          register={register}
          name="className"
          type="text"
          label={t("createClass.className")}
        />
        <InputField<ClassTypes>
          error={errors?.studentsNum?.message?.toString() || ""}
          register={register}
          name="studentsNum"
          type="text"
          label={t("createClass.studentsNum")}
        />
      </div>

      <div className="flex justify-center pt-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isCreatingClass}
          type="submit"
          className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-violet-700 hover:to-violet-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isCreatingClass ? <SmallSpinner /> : <HiPlus className="text-lg" />}
          <span>
            {isCreatingClass
              ? t("createClass.loadingClass")
              : t("createClass.createButton")}
          </span>
        </motion.button>
      </div>
    </motion.form>
  );
}

export default CreateClassForm;
