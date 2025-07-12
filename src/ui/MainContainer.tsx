import { useUser } from "@/slices/userSlice";
import { ReactNode } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";

function MainContainer({
  children,
  title,
  needsBackArrow = false,
}: MainContainerTypes) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center gap-5 px-10 pb-6">
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

function Controls({
  options,
  linkTo = "",
  linkTitle,
  width = "w-45",
  children,
  wantsLink = true,
}: ControlsTypes) {
  const {
    user: { role },
  } = useUser();
  return (
    <div className="flex items-center justify-center gap-5">
      <Filter options={options} width={width} />
      {role === "dean" && wantsLink && (
        <Link
          to={linkTo}
          className="rounded-md bg-violet-700 px-4 py-2 text-violet-50 transition-all duration-300 hover:bg-violet-800"
        >
          {linkTitle}
        </Link>
      )}
      {role === "supervisor" && children}
    </div>
  );
}

MainContainer.MainPageHeader = MainPageHeader;
MainContainer.Controls = Controls;

interface MainContainerTypes {
  children: ReactNode;
  title?: string;
  needsBackArrow?: boolean;
}

interface OptionsTypes {
  title: string;
  value: string;
}
interface ControlsTypes {
  options: OptionsTypes[];
  linkTo?: string;
  linkTitle?: string;
  width?: string;
  children?: ReactNode;
  wantsLink?: boolean;
}

export default MainContainer;
