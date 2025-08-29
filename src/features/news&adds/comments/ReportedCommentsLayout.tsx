import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import { Link } from "react-router-dom";
import { useShowReportedComments } from "./useShowReportedComments";

interface ReportedCommentsTypes {
  reporter: string;
  author: string;
  comment_content: string;
  event_id: number;
}

function ReportedCommentsLayout() {
  const { reportedComments, isLoading } = useShowReportedComments();

  if (isLoading) return <Spinner />;
  if (!reportedComments || reportedComments?.length === 0)
    return <Empty resource="reports" />;

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col divide-y divide-gray-200">
        {reportedComments?.map((comment, index) => (
          <ReportedCommentItem
            key={index}
            comment={comment as ReportedCommentsTypes}
          />
        ))}
      </div>
    </div>
  );
}

function ReportedCommentItem({ comment }: { comment: ReportedCommentsTypes }) {
  const { event_id, author, reporter, comment_content } = comment;

  return (
    <div className="flex items-center justify-between gap-6 p-4 transition-colors duration-200 hover:bg-gray-50">
      <div className="flex flex-grow items-center gap-6">
        <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-2 font-mono text-sm text-gray-50">
          Post #{event_id}
        </div>
        <div className="flex flex-col">
          <h5 className="mb-1 text-base font-semibold text-gray-800">
            "{comment_content}"
          </h5>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <p>
              Reported by: <span className="font-medium">{reporter}</span>
            </p>
            <p>
              Commented by: <span className="font-medium">{author}</span>
            </p>
          </div>
        </div>
      </div>
      <Link
        to={`/news&adds/${event_id}`}
        className="flex-shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go to post
      </Link>
    </div>
  );
}

export default ReportedCommentsLayout;
