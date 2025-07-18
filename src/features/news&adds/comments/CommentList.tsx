import AddComment from "./AddComment";
import PhotoModalComments from "./PhotoModalComments";

function CommentList({ id }: { id: number }) {
  return (
    <div className="flex h-[35rem] flex-col items-start justify-start gap-5">
      <h3 className="text-2xl font-bold">Comments:</h3>
      <div className="h-[27rem] w-full overflow-y-auto">
        <PhotoModalComments id={id} numberOfLoadingElements={6} />
      </div>
      <div className="fixed bottom-0 w-full place-self-center">
        <AddComment
          bgColor="bg-transparent"
          inputBgColor="bg-gray-300/50"
          hoverInputBgColor="hover:bg-gray-300/70"
          borderColor="border-transparent"
          isRounded={true}
          event_id={id}
        />
      </div>
    </div>
  );
}

export default CommentList;
