import PhotoModal from "./PhotoModal";
import PhotoModalComments from "./PhotoModalComments";

function ImagesContainer() {
  const imagesList = [
    { imageUrl: "/images/SportCar.jpg" },
    { imageUrl: "/images/paris.jpg" },
    { imageUrl: "/images/town.jpg" },
    { imageUrl: "/images/paris.jpg" },
    { imageUrl: "/images/town.jpg" },
  ];

  const images = [imagesList?.[0], imagesList?.[1], imagesList?.[2]];

  return (
    <PhotoModal photos={imagesList}>
      <div className="grid h-full w-full grid-cols-2 grid-rows-[200px_200px] gap-0.5 overflow-hidden">
        {images.map((image, index) => (
          <PhotoModal.Open index={index}>
            <div
              className={`group relative cursor-pointer overflow-hidden ${index === 0 ? "row-start-1 row-end-3" : ""} ${index === 1 && imagesList.length === 2 ? "row-start-1 row-end-3" : ""}`}
            >
              <img
                src={image.imageUrl}
                alt="paris"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale-25"
              />
              {index === 2 && imagesList.length > 3 && (
                <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-gray-700/60 text-3xl text-white transition-all duration-300 group-hover:scale-105 group-hover:grayscale-25">
                  +{imagesList.length - 3}
                </div>
              )}
            </div>
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
