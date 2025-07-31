import { useTranslation } from "react-i18next";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

interface PaginationTypes {
  dataLength: number;
  numberOfElements?: number;
  pageName?: string;
}

function Pagination({
  dataLength,
  numberOfElements = 7,
  pageName = "page",
}: PaginationTypes) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();

  const page = Number(searchParams.get(pageName)) || 1;
  const totalPages = Math.ceil(dataLength / numberOfElements);

  const firstNumber = page * numberOfElements - numberOfElements + 1;
  const secondNumber =
    page * numberOfElements > dataLength ? dataLength : page * numberOfElements;

  function handlePrevious() {
    searchParams.set(pageName, String(page - 1));
    setSearchParams(searchParams);
  }

  function handleNext() {
    searchParams.set(pageName, String(page + 1));
    setSearchParams(searchParams);
  }

  function goToPage(pageNum: number) {
    searchParams.set(pageName, String(pageNum));
    setSearchParams(searchParams);
  }

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalPages - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (page + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const pageNumbers = totalPages > 1 ? getPageNumbers() : [];

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 bg-white px-6 py-4 sm:flex-row">
      <div className="flex items-center">
        <p className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700">
          <span className="font-semibold text-indigo-600">{firstNumber}</span>
          {" - "}
          <span className="font-semibold text-indigo-600">{secondNumber}</span>
          {` ${t("pagination.of")} `}
          <span className="font-semibold text-gray-900">{dataLength}</span>
          {` ${t("pagination.results")} `}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={page <= 1}
          onClick={handlePrevious}
          className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:shadow-sm"
        >
          {i18n.language === "en" ? (
            <HiChevronLeft className="h-4 w-4" />
          ) : (
            <HiChevronRight className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">{t("pagination.previous")}</span>
        </button>

        {totalPages > 1 && (
          <div className="hidden items-center gap-1 sm:flex">
            {pageNumbers.map((pageNum, index) => {
              if (pageNum === "...") {
                return (
                  <span
                    key={`dots-${index}`}
                    className="px-3 py-2 text-sm text-gray-400 select-none"
                  >
                    ...
                  </span>
                );
              }

              const isCurrentPage = pageNum === page;
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum as number)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isCurrentPage
                      ? "bg-indigo-500 text-white shadow-md ring-2 ring-indigo-200"
                      : "border border-gray-300 bg-white text-gray-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  } shadow-sm`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-md sm:hidden">
            {page} / {totalPages}
          </div>
        )}

        <button
          disabled={page >= totalPages}
          onClick={handleNext}
          className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:shadow-sm"
        >
          <span className="hidden sm:inline">{t("pagination.next")}</span>
          {i18n.language === "en" ? (
            <HiChevronRight className="h-4 w-4" />
          ) : (
            <HiChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
