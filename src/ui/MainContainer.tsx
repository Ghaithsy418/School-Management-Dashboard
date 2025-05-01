import { ReactNode } from "react";

function MainContainer({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-6 px-10 pb-6">
      <h2 className="text-4xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default MainContainer;
