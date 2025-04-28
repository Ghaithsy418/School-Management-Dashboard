import { ErrorBoundary } from "react-error-boundary";

function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: ErrorBoundary["resetErrorBoundary"];
}) {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-indigo-100 p-9 shadow-md shadow-gray-800/20">
        <h1 className="text-4xl font-bold">Oops!. Something went wrong :(</h1>
        <p className="mb-4 text-xl text-red-600">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="cursor-pointer rounded bg-gray-900/80 px-6 py-2.5 text-indigo-50 shadow-sm shadow-gray-900 transition-all duration-300 hover:bg-gray-900/70"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Error;
