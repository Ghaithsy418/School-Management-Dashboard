import InputField from "@/ui/InputField";
import SubmitButton from "@/ui/SubmitButton";
import Textarea from "@/ui/Textarea";
import { useForm } from "react-hook-form";
import { useCreateEvent } from "./useCreateEvent";
import SmallSpinner from "@/ui/SmallSpinner";
import { CreatePostTypes } from "@/utils/types";
import { useTranslation } from "react-i18next";

function CreatePostForm() {
  const { t } = useTranslation("newsAndAdds");
  const { register, handleSubmit, formState, reset } =
    useForm<CreatePostTypes>();
  const { createPostMutation, isCreatingPost } = useCreateEvent();
  const { errors } = formState;

  function onSubmit(data: CreatePostTypes) {
    return createPostMutation(data, { onSuccess: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start justify-center gap-8"
    >
      <h3 className="text-2xl font-bold">{t("createPost.title")}</h3>
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <InputField<CreatePostTypes>
          name="event_name"
          label={t("createPost.eventTitle")}
          type="text"
          register={register}
          error={errors?.event_name?.message?.toString() || ""}
        />
        <Textarea<CreatePostTypes>
          name="post"
          label={t("createPost.eventDescription")}
          register={register}
          error={errors?.post?.message?.toString() || ""}
        />
        <InputField<CreatePostTypes>
          name="photos"
          label={t("createPost.eventPhotos")}
          type="file"
          register={register}
          multiple={true}
          error={errors?.photos?.message?.toString() || ""}
          inputValidation={() => {}}
        />
        <SubmitButton size="w-full">
          {isCreatingPost ? <SmallSpinner /> : t("createPost.title")}
        </SubmitButton>
      </div>
    </form>
  );
}

export default CreatePostForm;
