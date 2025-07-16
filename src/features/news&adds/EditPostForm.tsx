import InputField from "@/ui/InputField";
import PhotosSlider from "@/ui/PhotosSlider";
import SubmitButton from "@/ui/SubmitButton";
import { detectLanguage } from "@/utils/detectLanguage";
import { EventTypes } from "@/utils/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useEditEvent } from "./useEditEvent";
import SmallSpinner from "@/ui/SmallSpinner";

interface EditFormTypes {
  event: EventTypes;
}

interface DataTypes {
  event_name: string;
  post: string;
  photos: FileList;
}

function EditPostForm({ event }: EditFormTypes) {
  const { event_name, post, media } = event;
  const { editEventMutation, isEditingEvent } = useEditEvent();
  const { handleSubmit, register, formState } = useForm<DataTypes>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [optMedia, setOptMedia] = useState(media);
  const [deletedPhotos, setDeletedPhotos] = useState<number[]>([]);

  const { errors } = formState;
  const eventNameLang = detectLanguage(event_name);
  const postLang = detectLanguage(post);

  function next() {
    setCurrentIndex((currentIndex + 1) % optMedia.length);
  }

  function previous() {
    setCurrentIndex((currentIndex - 1 + optMedia.length) % optMedia.length);
  }

  function onSubmit(data: DataTypes) {
    return editEventMutation({
      ...data,
      deleted_media_ids: deletedPhotos,
      id: event.id,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start justify-center gap-3"
    >
      <input
        dir={eventNameLang === "English" ? "ltr" : "rtl"}
        type="text"
        defaultValue={event_name}
        className={`text-lg font-semibold ${inputClassName}`}
        {...register("event_name")}
      />
      <textarea
        dir={postLang === "English" ? "ltr" : "rtl"}
        defaultValue={post}
        className={inputClassName}
        {...register("post")}
      />
      {optMedia.length !== 0 && optMedia?.[currentIndex] && (
        <div className="relative mb-5">
          <PhotosSlider
            next={next}
            previous={previous}
            photoData={optMedia[currentIndex]}
            width="w-full"
            padding="p-0"
            buttonsSize="h-10 w-10"
            photosLength={optMedia.length}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setOptMedia(
                optMedia.filter(
                  (photo) => photo.id !== optMedia?.[currentIndex].id,
                ),
              );
              setDeletedPhotos([...deletedPhotos, optMedia?.[currentIndex].id]);
              next();
            }}
            className="absolute top-3 left-3 rounded-full bg-gray-300/80 p-1 transition-all duration-300 hover:bg-gray-400/80"
          >
            <RxCross2 className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      )}
      <div className="mb-3 w-full">
        <InputField<DataTypes>
          name="photos"
          label="Add more photos if you want!"
          type="file"
          register={register}
          multiple={true}
          error={errors?.photos?.message?.toString() || ""}
          inputValidation={() => {}}
        />
      </div>
      <SubmitButton size="w-full">
        {isEditingEvent ? <SmallSpinner /> : "Edit this Post"}
      </SubmitButton>
    </form>
  );
}

const inputClassName = "w-full focus:outline-0 p-2";

export default EditPostForm;
