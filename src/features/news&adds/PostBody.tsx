import ImagesContainer from "./ImagesContainer";
import PostDescription from "./PostDescription";

interface PostBodyTypes {
  event_name: string;
  post: string;
  media: { id: number; url: string }[];
}

function PostBody({ event_name, post, media }: PostBodyTypes) {
  return (
    <div className="flex w-full flex-col items-start justify-center space-y-3 py-3">
      <PostDescription eventTitle={event_name} description={post} />
      <ImagesContainer media={media} />
    </div>
  );
}

export default PostBody;
