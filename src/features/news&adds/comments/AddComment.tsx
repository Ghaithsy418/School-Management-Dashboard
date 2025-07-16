import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";
import { useAddComment } from "./useAddComment";

function AddComment({ event_id }: { event_id: number }) {
  const { handleSubmit, register, reset } = useForm<{ content: string }>();
  const { addCommentMutation, isAddingComment } = useAddComment(event_id);

  function onSubmit(data: { content: string }) {
    return addCommentMutation(
      { ...data, event_id },
      { onSuccess: () => reset() },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-3 border-t border-gray-400 bg-gray-300 p-4"
    >
      <input
        {...register("content", { required: "don't let it empty" })}
        placeholder={
          isAddingComment ? "Sending the Comment..." : "Write a comment..."
        }
        autoComplete="off"
        className={`h-10 w-full resize-none rounded-full bg-gray-400/40 px-4 py-2 transition-all duration-300 outline-none hover:bg-gray-400/60 hover:ring hover:ring-gray-800 focus:ring focus:ring-gray-800 ${isAddingComment ? "cursor-progress" : ""}`}
      />
      <button
        type="submit"
        className={`flex cursor-pointer items-center justify-center rounded-full bg-gray-400/40 p-2.5 text-gray-800 transition-all duration-300 hover:bg-gray-400/80 ${isAddingComment ? "cursor-progress" : ""}`}
      >
        <GrSend className="h-5 w-5" />
      </button>
    </form>
  );
}

export default AddComment;
