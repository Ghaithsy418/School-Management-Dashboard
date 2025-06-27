import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CardsTypes {
  data: unknown[];
  render: (obj: any) => ReactNode;
}

function Cards({ data, render }: CardsTypes) {
  return <div className="grid grid-cols-4 gap-8">{data.map(render)}</div>;
}

export default Cards;
