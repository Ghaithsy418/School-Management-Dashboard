import Papa from "papaparse";
import { Ref } from "react";

interface ParsingTypes {
  ref: Ref<HTMLInputElement> | null;
}

function ParsingCSV({ ref }: ParsingTypes) {
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
                console.log(results.data);
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
