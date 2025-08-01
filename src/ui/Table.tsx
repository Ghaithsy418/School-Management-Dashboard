/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext } from "react";

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
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg backdrop-blur-sm dark:border-gray-500 dark:bg-gray-950/50">
        {children}
      </div>
    </tableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(tableContext);
  return (
    <div
      role="rowheader"
      className={`grid w-full gap-8 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 font-semibold text-gray-50 shadow-sm dark:border-gray-600 dark:from-indigo-600 dark:to-purple-700`}
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
      role="row"
      className="grid w-full items-center justify-center gap-8 border-b border-gray-100 px-8 py-4 font-medium text-gray-700 transition-all duration-200 last:border-b-0 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-sm dark:border-gray-600 dark:text-gray-100 dark:hover:from-indigo-900 dark:hover:to-purple-950"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }: BodyTypes) {
  return (
    <div role="table" className="w-full">
      {data.map(render)}
    </div>
  );
}

function Tail({ children }: { children: ReactNode }) {
  return (
    <div
      role="row"
      className="flex w-full items-center justify-between border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 text-sm font-medium text-gray-600 dark:border-gray-700 dark:from-gray-950/40 dark:to-gray-950/50"
    >
      {children}
    </div>
  );
}

interface BodyTypes {
  data: unknown[];
  render: (obj: any) => ReactNode;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Tail = Tail;

export default Table;
