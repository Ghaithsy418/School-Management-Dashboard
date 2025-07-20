import { BsPatchQuestion } from "react-icons/bs";

function HowToUse() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 rounded-xl border border-gray-200 bg-white px-6 pt-10 pb-7 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-indigo-100 p-3 text-indigo-600">
          <BsPatchQuestion className="h-7 w-7" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900">
            How to Upload Marks??
          </h3>
          <p className="text-sm text-gray-600">
            These steps will make uploading marks very clear :)
          </p>
        </div>
      </div>
      <div className="ml-2 flex flex-col items-start justify-center gap-3 text-lg">
        <p className="flex items-center justify-start gap-2">
          <span className="mr-1 flex h-8 w-8 items-center rounded-full bg-indigo-100 p-2 font-bold text-indigo-600">
            1.
          </span>
          Enter the informations to get an empty template.
        </p>
        <p className="flex items-center justify-start gap-2">
          <span className="mr-1 flex h-8 w-8 items-center rounded-full bg-indigo-100 p-2 font-bold text-indigo-600">
            2.
          </span>
          Fill the template with <strong>Student's</strong> marks.
        </p>
        <p className="flex items-center justify-start gap-2">
          <span className="mr-1 flex h-8 w-8 items-center rounded-full bg-indigo-100 p-2 font-bold text-indigo-600">
            3.
          </span>
          Upload the <strong>File.</strong>
        </p>
      </div>
    </div>
  );
}

export default HowToUse;
