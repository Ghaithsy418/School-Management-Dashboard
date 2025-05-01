import { ReactNode } from "react";
import Search from "./Search";

function MainPageHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2">
      <Search />
      {children}
    </div>
  );
}

export default MainPageHeader;
