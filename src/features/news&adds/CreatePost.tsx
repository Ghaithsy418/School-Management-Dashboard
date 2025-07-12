import { IoCreateOutline } from "react-icons/io5";

function CreatePost() {
  return (
    <div className="flex h-19 w-full items-center justify-start gap-5 bg-gray-50 py-6 pr-6 pl-8">
      <span className="flex items-center justify-center rounded-full bg-indigo-100 p-3 text-indigo-600">
        <IoCreateOutline className="h-5 w-5" />
      </span>
      <button className="w-92 cursor-pointer rounded-full border border-gray-700/20 px-6 py-2 text-start transition-all duration-300 hover:bg-gray-100">
        New news? Try posting them here😊
      </button>
    </div>
  );
}

export default CreatePost;
