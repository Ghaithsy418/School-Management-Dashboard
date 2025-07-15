/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export const useClientTransform = function <S extends Record<string, any>>(
  sourceData: S[],
  searchKey: string,
) {
  const [searchParams] = useSearchParams();

  const transformedData = useMemo(() => {
    let data = sourceData || [];

    const searchQuery = searchParams.get("search") || "";
    if (searchQuery && searchKey) {
      data = data.filter((item) =>
        item[searchKey]?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    const filterValue = searchParams.get("filter");
    if (filterValue) {
      const [direction, key] = filterValue.split("-");

      const sortedData = [...data];

      if (direction === "asc") {
        sortedData.sort((a, b) => String(a[key]).localeCompare(String(b[key])));
      }
      if (direction === "desc") {
        sortedData.sort((a, b) => String(b[key]).localeCompare(String(a[key])));
      }
      return sortedData;
    }
    return data;
  }, [sourceData, searchParams, searchKey]);

  return transformedData;
};
