import { useSearchParams } from "react-router-dom";

export const usePaginate = function <T>(
  data: T[],
  numberOfElements: number = 7,
  pageName: string = "page",
) {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get(pageName)) || 1;

  const firstNumber = page * numberOfElements - numberOfElements;
  const secondNumber =
    page * numberOfElements > data?.length
      ? data?.length
      : page * numberOfElements;

  const filteredData = data?.filter(
    (_: unknown, i: number) => firstNumber <= i && secondNumber > i,
  );

  return filteredData;
};
