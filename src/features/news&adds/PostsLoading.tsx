function PostsLoading() {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-full animate-pulse rounded px-4 py-5 shadow md:px-6 md:py-7 dark:border-gray-400">
        <div className="mb-5 flex items-center">
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
            <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-400 dark:bg-gray-400"></div>
            <div className="h-2 w-24 rounded-full bg-gray-400 dark:bg-gray-400"></div>
          </div>
        </div>
        <div className="mb-5 h-2.5 w-48 rounded-full bg-gray-400 dark:bg-gray-400"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-400 dark:bg-gray-400"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-400 dark:bg-gray-400"></div>

        <div className="mb-5 h-2 rounded-full bg-gray-400 dark:bg-gray-400"></div>
        <div className="flex h-72 items-center justify-center rounded bg-gray-400 dark:bg-gray-400">
          <svg
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-10 w-10 text-gray-600 dark:text-gray-600"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PostsLoading;
