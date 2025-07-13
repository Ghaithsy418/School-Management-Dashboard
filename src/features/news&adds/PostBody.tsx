import ImagesContainer from "./ImagesContainer";
import PostDescription from "./PostDescription";

function PostBody() {
  return (
    <div className="flex w-full flex-col items-start justify-center space-y-3 py-3">
      <PostDescription
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        architecto, repudiandae asperiores adipisci ducimus veniam eaque libero
        ad, quasi autem tempora iste quam perspiciatis optio dignissimos earum!
        Quas, saepe quaerat"
      />
      <ImagesContainer />
    </div>
  );
}

export default PostBody;
