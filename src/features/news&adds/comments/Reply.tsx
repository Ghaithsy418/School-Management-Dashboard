import { Dispatch, SetStateAction } from "react";
import { useAddComment } from "./useAddComment";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

interface ReplyTypes {
  setIsReplying: Dispatch<SetStateAction<boolean>>;
  eventId: number;
  parentId: number;
}

function Reply({ setIsReplying, eventId, parentId }: ReplyTypes) {
  const { t } = useTranslation("newsAndAdds");
  const { handleSubmit, register, reset } = useForm<{ content: string }>();
  const { addCommentMutation, isAddingComment } = useAddComment(
    eventId,
    parentId,
  );
  const queryClient = useQueryClient();

  function onSubmit(data: { content: string }) {
    return addCommentMutation(
      {
        ...data,
        event_id: eventId,
        parent_id: parentId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["comments", eventId] });
          reset();
          setIsReplying(false);
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 ml-10 rounded-md border border-gray-300 bg-gray-100 p-3 dark:border-gray-500 dark:bg-gray-800"
    >
      <input
        {...register("content", { required: "don't let it empty" })}
        placeholder={t("reply.replyNow")}
        className="mb-2 w-full text-sm text-gray-900 focus:outline-0 dark:text-gray-100"
        autoComplete="off"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setIsReplying(false)}
          className="rounded bg-gray-300 px-3 py-1 text-[13px] transition-colors hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {t("reply.cancel")}
        </button>
        <button
          type="submit"
          className="rounded bg-indigo-600 px-3 py-1 text-[13px] text-white transition-colors hover:bg-indigo-700"
        >
          {isAddingComment ? t("reply.loadingReply") : t("reply.postReply")}
        </button>
      </div>
    </form>
  );
}

export default Reply;
