function CommentsLoading() {
  return (
    <div className="mb-5 flex animate-pulse items-center">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="me-3 h-10 w-10 text-gray-400 dark:text-gray-400"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
      </svg>
      <div>
        <div className="mb-2 h-2.5 w-46 rounded-full bg-gray-400 dark:bg-gray-400"></div>
        <div className="h-2.5 w-72 rounded-full bg-gray-400 dark:bg-gray-400"></div>
      </div>
    </div>
  );
}

export default CommentsLoading;
