interface ReportTypes {
  report_id: number;
  reason: string;
  comment_content: string;
  reporter: string;
  reporter_role: string;
  author: string;
  author_role: string;
}

function Report({ report }: { report: ReportTypes }) {
  return (
    <div className="my-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">
          Report #{report.report_id}
        </h3>
        <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
          {report.reason}
        </span>
      </div>

      <blockquote className="my-4 border-l-4 border-gray-300 pl-4">
        <p className="text-gray-600 italic">"{report.comment_content}"</p>
      </blockquote>

      <hr className="my-4 border-gray-200" />

      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <div>
          <p className="text-gray-500">Reported By</p>
          <p className="font-semibold text-gray-900">
            {report.reporter} ({report.reporter_role})
          </p>
        </div>
        <div>
          <p className="text-gray-500">Comment Author</p>
          <p className="font-semibold text-gray-900">
            {report.author} ({report.author_role})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Report;
