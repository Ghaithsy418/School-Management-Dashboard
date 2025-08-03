import { useComments } from "@/slices/commentsSlice";
import PhotoModal from "./PhotoModal";
import AddComment from "./comments/AddComment";
import PhotoModalComments from "./comments/PhotoModalComments";
import { motion } from "framer-motion";
import ReportCommentForm from "./comments/ReportCommentForm";

interface ImageContainerTypes {
  media: { id: number; url: string }[];
  createdAt: string;
  id: number;
}

function ImagesContainer({ media, createdAt, id }: ImageContainerTypes) {
  const images = media?.slice(0, 3);
  const { ui, commentId } = useComments();

  if (!media.length) return null;

  return (
    <PhotoModal photos={media}>
      <div
        className={`grid w-full ${images.length === 1 ? "" : "grid-cols-2"} gap-0.5 overflow-hidden`}
      >
        {images.map((image, index) => (
          <PhotoModal.Open index={index} key={image?.url}>
            <motion.div
              className={`group relative aspect-video cursor-pointer overflow-hidden bg-black ${index === 0 && images.length > 1 ? "col-span-2" : ""} ${index === 1 && images.length === 2 ? "col-span-2" : ""}`}
            >
              <img
                src={image?.url}
                alt={`photo-${image?.id}-${image?.url}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
              />
              {index === 2 && media.length > 3 && (
                <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-gray-700/60 text-3xl text-white">
                  +{media.length - 3}
                </div>
              )}
            </motion.div>
          </PhotoModal.Open>
        ))}
        <PhotoModal.Window
          createdAt={createdAt}
          addComment={
            ui === "report" ? null : (
              <AddComment
                event_id={id}
                bgColor="bg-gray-300 dark:bg-gray-900"
                inputBgColor="bg-gray-400/20"
                hoverInputBgColor="hover:bg-gray-400/50"
                borderColor="border-gray-700/40 dark:border-gray-500/60"
              />
            )
          }
        >
          {ui === "report" ? (
            <ReportCommentForm commentId={commentId} />
          ) : (
            <PhotoModalComments id={id} />
          )}
        </PhotoModal.Window>
      </div>
    </PhotoModal>
  );
}

export default ImagesContainer;
