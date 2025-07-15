import PhotoModal from "./PhotoModal";
import PhotoModalComments from "./comments/PhotoModalComments";
import { motion } from "framer-motion";

function ImagesContainer({ media }: { media: { id: number; url: string }[] }) {
  const images = media?.slice(0, 3);

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
        <PhotoModal.Window>
          <PhotoModalComments />
        </PhotoModal.Window>
      </div>
    </PhotoModal>
  );
}

export default ImagesContainer;
