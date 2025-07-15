import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import Textarea from "@/ui/Textarea";
import { useForm } from "react-hook-form";
import { useCreatePost } from "./useCreatePost";
import SmallSpinner from "@/ui/SmallSpinner";
import { CreatePostTypes } from "@/utils/types";

function CreatePostForm() {
  const { register, handleSubmit, formState, reset } =
    useForm<CreatePostTypes>();
  const { createPostMutation, isCreatingPost } = useCreatePost();
  const { errors } = formState;

  function onSubmit(data: CreatePostTypes) {
    return createPostMutation(data, { onSuccess: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-8"
    >
      <h3 className="text-2xl font-bold">Create New Post</h3>
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <InputField<CreatePostTypes>
          name="event_name"
          label="Event Title"
          type="text"
          register={register}
          error={errors?.event_name?.message?.toString() || ""}
        />
        <Textarea<CreatePostTypes>
          name="post"
          label="Event Description"
          register={register}
          error={errors?.post?.message?.toString() || ""}
        />
        <InputField<CreatePostTypes>
          name="photos"
          label="Event Photos (You can choose multiple files)"
          type="file"
          register={register}
          multiple={true}
          error={errors?.photos?.message?.toString() || ""}
          inputValidation={() => {}}
        />
        <SubmitButton size="w-full">
          {isCreatingPost ? <SmallSpinner /> : "Create New Post"}
        </SubmitButton>
      </div>
    </form>
  );
}

export default CreatePostForm;
