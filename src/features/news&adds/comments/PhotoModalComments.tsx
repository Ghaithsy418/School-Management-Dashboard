import Empty from "@/ui/Empty";
import Comment from "./Comment";
import CommentsLoading from "./CommentsLoading";
import { useGetEventComments } from "./useGetEventComments";

function PhotoModalComments({ id }: { id: number }) {
  const { comments, isGettingComments } = useGetEventComments(id);

  if (isGettingComments)
    return (
      <div className="flex flex-col items-start justify-center gap-4">
        {Array.from({ length: 7 }, (_, index) => (
          <CommentsLoading key={index} />
        ))}
      </div>
    );

  if (!comments?.length)
    return <Empty resource="comments" className="border-slate-500/50" />;

  return (
    <div className="mt-4 space-y-5 pt-4">
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} eventId={id} />
      ))}
    </div>
  );
}

export default PhotoModalComments;
