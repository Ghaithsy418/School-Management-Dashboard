// src/features/comments/ReportComment.jsx

import { changeUi, setCommentId } from "@/slices/commentsSlice";
import { useState } from "react";
import { HiOutlineFlag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useReportComment } from "./useReportComment";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ReportFormTypes {
  commentId: number;
}

interface DataTypes {
  additional: string;
}

function ReportCommentForm({ commentId }: ReportFormTypes) {
  const { t } = useTranslation("newsAndAdds");
  const [selectedReason, setSelectedReason] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const { reportCommentMutation, isReporting } = useReportComment();
  const { handleSubmit, register } = useForm<DataTypes>();
  const dispatch = useDispatch();

  function onSubmit(data: DataTypes) {
    if (!selectedReason) return;

    dispatch(setCommentId(commentId));
    return reportCommentMutation(
      {
        reason: `${selectedReason}: ${data.additional}`,
      },
      {
        onSuccess: () => {
          dispatch(changeUi(""));
          dispatch(setCommentId(0));
        },
      },
    );
  }

  const reportReasons = [
    t("reportForm.spam"),
    t("reportForm.harassment"),
    t("reportForm.violence"),
    t("reportForm.intellectual"),
    t("reportForm.other"),
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 text-slate-700 dark:text-slate-100"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-50">
          {t("reportForm.title")}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
          {t("reportForm.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {reportReasons.map((reason) => (
          <button
            type="button"
            key={reason}
            onClick={() => setSelectedReason(reason)}
            className={`rounded-lg border px-4 py-2 text-left text-sm font-semibold transition-all duration-200 ${
              selectedReason === reason
                ? "border-indigo-500 bg-indigo-100 text-indigo-800 shadow-md ring-2 ring-indigo-300"
                : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-800"
            }`}
          >
            {reason}
          </button>
        ))}
      </div>

      <textarea
        {...register("additional")}
        placeholder={t("reportForm.additional")}
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:bg-slate-700"
        rows={3}
      />

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => {
            dispatch(changeUi(""));
            dispatch(setCommentId(0));
          }}
          className="rounded-lg bg-slate-200 px-5 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-300"
        >
          {t("reportForm.cancel")}
        </button>
        <button
          disabled={!selectedReason}
          type="submit"
          className="rounded-lg bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-2">
            <HiOutlineFlag />
            {isReporting
              ? t("reportForm.reporting")
              : t("reportForm.submitButton")}
          </span>
        </button>
      </div>
    </form>
  );
}

export default ReportCommentForm;
