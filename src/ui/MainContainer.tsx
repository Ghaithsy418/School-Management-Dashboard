import { ReactNode } from "react";
import Search from "./Search";
import { useUser } from "../context/UserContext";
import Filter from "./Filter";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function MainContainer({
  children,
  title,
  needsBackArrow = false,
}: MainContainerTypes) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center gap-7 px-10 pb-6">
      <div className="flex items-center justify-start gap-5">
        {needsBackArrow && (
          <button onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack className="h-10 w-10 cursor-pointer transition-all duration-300 hover:text-indigo-600" />
          </button>
        )}
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
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
  const role = useSelector((state: RootState) => state.user.user.role);
  return (
    <div className="flex items-center justify-center gap-5">
      <Filter options={Array.isArray(options) ? options : []} />
      {role === "dean" && (
        <Link
          to={linkTo}
          className="rounded-md bg-violet-700 px-4 py-2 text-violet-50 transition-all duration-300 hover:bg-violet-800"
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
  needsBackArrow?: boolean;
}

interface ControlsTypes {
  options: unknown;
  linkTo: string;
  linkTitle: string;
}

export default MainContainer;
