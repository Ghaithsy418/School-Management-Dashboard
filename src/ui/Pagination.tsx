import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

interface PaginationTypes {
  dataLength: number;
  numberOfElements?: number;
}

function Pagination({ dataLength, numberOfElements = 7 }: PaginationTypes) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const firstNumber = page * numberOfElements - numberOfElements + 1;
  const secondNumber =
    page * numberOfElements > dataLength ? dataLength : page * numberOfElements;

  function handlePrevious() {
    searchParams.set("page", String(page - 1));
    setSearchParams(searchParams);
  }

  function handleNext() {
    searchParams.set("page", String(page + 1));
    setSearchParams(searchParams);
  }

  return (
    <>
      <p>
        {firstNumber} to {secondNumber} of {dataLength} results
      </p>
      <div className="flex items-center justify-center gap-1">
        <button
          disabled={page <= 1}
          onClick={handlePrevious}
          className="flex cursor-pointer items-center justify-center rounded-sm px-2 py-1 transition-all duration-300 hover:bg-violet-600 hover:text-violet-50 disabled:cursor-not-allowed"
        >
          <HiChevronLeft className="h-5 w-5" />
          Previous
        </button>
        <button
          disabled={page >= Math.ceil(dataLength / numberOfElements)}
          onClick={handleNext}
          className="flex cursor-pointer items-center justify-center rounded-sm px-2 py-1 transition-all duration-300 hover:bg-violet-600 hover:text-violet-50 disabled:cursor-not-allowed"
        >
          Next <HiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}

export default Pagination;
