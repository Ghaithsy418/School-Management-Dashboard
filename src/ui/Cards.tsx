import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardsTypes {
  data: unknown[];
  render: (obj: any) => ReactNode;
}

function Cards({ data, render }: CardsTypes) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {data.map(render)}
    </div>
  );
}

export default Cards;
