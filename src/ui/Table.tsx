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
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg backdrop-blur-sm">
        {children}
      </div>
    </tableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(tableContext);
  return (
    <div
      className={`grid w-full gap-8 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-sm`}
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
      className="grid w-full items-center justify-center gap-8 border-b border-gray-100 px-8 py-4 font-medium text-gray-700 transition-all duration-200 last:border-b-0 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:shadow-sm"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }: BodyTypes) {
  return <div className="w-full">{data.map(render)}</div>;
}

function Tail({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center justify-between border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 text-sm font-medium text-gray-600">
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
