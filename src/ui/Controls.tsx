import { Link } from "react-router";
import { useUser } from "../context/UserContext";
import Filter from "./Filter";

interface controlsTypes {
  options: unknown;
  linkTo: string;
  linkTitle: string;
}

function Controls({ options, linkTo, linkTitle }: controlsTypes) {
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

export default Controls;
