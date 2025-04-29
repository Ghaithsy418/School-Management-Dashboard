import Search from "../../ui/Search";
import StudentsControls from "./StudentsControls";

function StudentsHeader() {
  return (
    <div className="flex items-center justify-between py-2">
      <Search />
      <StudentsControls />
    </div>
  );
}

export default StudentsHeader;
