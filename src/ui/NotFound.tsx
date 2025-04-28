import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-indigo-100 p-9 shadow-md shadow-gray-800/20">
        <h1 className="text-4xl font-bold">Page Not Found! 404</h1>
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer rounded bg-gray-900/80 px-6 py-2.5 text-indigo-50 shadow-sm shadow-gray-900 transition-all duration-300 hover:bg-gray-900/70"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
