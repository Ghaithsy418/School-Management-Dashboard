import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";
import { useAddComment } from "./useAddComment";
import { useTranslation } from "react-i18next";

interface AddCommentTypes {
  event_id: number;
  bgColor: string;
  inputBgColor: string;
  hoverInputBgColor: string;
  borderColor: string;
  isRounded?: boolean;
}

function AddComment({
  event_id,
  bgColor,
  inputBgColor,
  hoverInputBgColor,
  borderColor,
  isRounded = false,
}: AddCommentTypes) {
  const { handleSubmit, register, reset } = useForm<{ content: string }>();
  const { addCommentMutation, isAddingComment } = useAddComment(event_id);
  const { t } = useTranslation("newsAndAdds");

  function onSubmit(data: { content: string }) {
    return addCommentMutation(
      { ...data, event_id },
      { onSuccess: () => reset() },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex items-center justify-center ${isRounded ? "rounded-md" : ""} gap-3 border-t ${borderColor} ${bgColor} p-4`}
    >
      <input
        {...register("content", { required: "don't let it empty" })}
        placeholder={
          isAddingComment ? t("main.loadingComment") : t("main.addComment")
        }
        autoComplete="off"
        className={`h-10 w-full resize-none rounded-full ${inputBgColor} px-4 py-2 transition-all duration-300 outline-none ${hoverInputBgColor} hover:ring hover:ring-gray-800 focus:ring focus:ring-gray-800 ${isAddingComment ? "cursor-progress" : ""}`}
      />
      <button
        type="submit"
        className={`flex cursor-pointer items-center justify-center rounded-full ${inputBgColor} p-2.5 text-gray-800 transition-all duration-300 dark:text-gray-300 ${hoverInputBgColor} ${isAddingComment ? "cursor-progress" : ""}`}
      >
        <GrSend className="h-5 w-5" />
      </button>
    </form>
  );
}

export default AddComment;
