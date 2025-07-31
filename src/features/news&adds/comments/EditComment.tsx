import { useDispatch } from "react-redux";
import { useEditComment } from "./useEditComment";
import { changeUi } from "@/slices/commentsSlice";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function EditComment({
  commentId,
  eventId,
  content,
}: {
  commentId: number;
  content: string;
  eventId: number;
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation("newsAndAdds");
  const { editCommentMutation, isEditing } = useEditComment(eventId);
  const { handleSubmit, register } = useForm<{ content: string }>();

  function onSubmit(data: { content: string }) {
    editCommentMutation(
      { content: data.content, commentId },
      {
        onSuccess: () => dispatch(changeUi("")),
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-1"
    >
      <input
        {...register("content", { required: "you should type something!" })}
        className="w-full px-2 py-1 text-sm focus:outline-0"
        placeholder="Edit you comment"
        defaultValue={content}
        autoComplete="off"
      />
      <div className="flex items-center justify-center gap-2 place-self-end">
        <button
          type="button"
          onClick={() => dispatch(changeUi(""))}
          className="rounded bg-gray-300 px-3 py-1 text-[13px] transition-colors hover:bg-gray-400"
        >
          {t("reply.cancel")}
        </button>
        <button
          type="submit"
          className="rounded bg-indigo-600 px-2 py-1 text-[13px] text-white transition-colors hover:bg-indigo-700"
        >
          {isEditing ? t("main.loadingEdit") : t("main.edit")}
        </button>
      </div>
    </form>
  );
}

export default EditComment;
