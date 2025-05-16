import { ReactNode } from "react";
import Search from "./Search";
import { useUser } from "../context/UserContext";
import Filter from "./Filter";
import { Link } from "react-router";

function MainContainer({ children, title }: MainContainerTypes) {
  return (
    <div className="flex flex-col justify-center gap-7 px-10 pb-6">
      <h2 className="text-4xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

function MainPageHeader({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2 flex items-center justify-between py-2">
      <Search />
      {children}
    </div>
  );
}

function Controls({ options, linkTo, linkTitle }: ControlsTypes) {
  const { role } = useUser();
  return (
    <div className="flex items-center justify-center gap-5">
      <Filter options={Array.isArray(options) ? options : []} />
      {role === "manager" && (
        <Link
          to={linkTo}
          className="rounded-md bg-indigo-700 px-4 py-2 text-indigo-50 transition-all duration-300 hover:bg-indigo-800"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
}

MainContainer.MainPageHeader = MainPageHeader;
MainContainer.Controls = Controls;

interface MainContainerTypes {
  children: ReactNode;
  title: string;
}

interface ControlsTypes {
  options: unknown;
  linkTo: string;
  linkTitle: string;
}

export default MainContainer;
