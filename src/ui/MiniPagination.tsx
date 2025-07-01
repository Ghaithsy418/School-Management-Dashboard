import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

interface MiniPaginationTypes {
  dataLength: number;
  numberOfElements?: number;
  pageName?: string;
}

function MiniPagination({
  dataLength,
  numberOfElements = 7,
  pageName = "page",
}: MiniPaginationTypes) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get(pageName)) || 1;
  const totalPages = Math.ceil(dataLength / numberOfElements);

  function handlePrevious() {
    if (page <= 1) return;
    searchParams.set(pageName, String(page - 1));
    setSearchParams(searchParams);
  }

  function handleNext() {
    if (page >= totalPages) return;
    searchParams.set(pageName, String(page + 1));
    setSearchParams(searchParams);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 px-5 py-2.5">
      <button
        disabled={page <= 1}
        onClick={handlePrevious}
        aria-label="Go to previous page"
        className="rounded-md border border-slate-300 p-1.5 text-slate-600 transition-colors duration-200 enabled:hover:bg-indigo-50 enabled:hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <p className="text-sm text-slate-600">
        Page <span className="font-semibold text-slate-800">{page}</span>
        <span className="text-slate-400"> / </span>
        <span className="font-semibold text-slate-800">{totalPages}</span>
      </p>

      <button
        disabled={page >= totalPages}
        onClick={handleNext}
        aria-label="Go to next page"
        className="rounded-md border border-slate-300 p-1.5 text-slate-600 transition-colors duration-200 enabled:hover:bg-indigo-50 enabled:hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <HiChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default MiniPagination;
