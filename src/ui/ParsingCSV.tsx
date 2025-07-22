import Papa from "papaparse";
import { Dispatch, Ref, SetStateAction } from "react";

interface ParsingTypes<T> {
  ref: Ref<HTMLInputElement> | null;
  setCsvData: Dispatch<SetStateAction<T>>;
}

function ParsingCSV<T>({ ref, setCsvData }: ParsingTypes<T>) {
  return (
    <>
      <input
        hidden
        ref={ref}
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files;
          if (file)
            Papa.parse<File>(file[0], {
              header: true,
              complete: (results) => {
                setCsvData(results.data[results.data.length - 1] as T);
              },
              error: (error) => {
                throw new Error(error.message);
              },
            });
        }}
      />
    </>
  );
}

export default ParsingCSV;
