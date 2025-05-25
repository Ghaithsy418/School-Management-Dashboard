import { createContext, ReactNode, useContext } from "react";
import { StudentTypes } from "../utils/types";

const tableContext = createContext<{ columns: string }>({ columns: "" });
function Table({
  children,
  columns,
}: {
  children: ReactNode;
  columns: string;
}) {
  return (
    <tableContext.Provider value={{ columns }}>
      <div className="flex flex-col items-center justify-center overflow-x-auto rounded-sm border-1 border-gray-400/40 wrap-normal">
        {children}
      </div>
    </tableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(tableContext);
  return (
    <div
      className={`grid w-full gap-8 border-b-1 border-b-gray-400/60 bg-indigo-100 px-8 py-3 font-semibold`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: ReactNode }) {
  const { columns } = useContext(tableContext);
  return (
    <div
      className="grid w-full items-center justify-center gap-8 bg-indigo-100/40 px-8 py-3 font-light"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }: BodyTypes) {
  return (
    <div className="w-full divide-y-1 divide-gray-300/50">
      {Array.isArray(data) && data.map(render)}
    </div>
  );
}

interface BodyTypes {
  data: unknown;
  render: (array: StudentTypes) => ReactNode;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
