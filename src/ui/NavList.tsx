import { ReactNode } from "react";
import NavItem from "./NavItem";

interface buttonsTypes {
  title: string;
  icon: ReactNode;
  value: string;
  immediateLink: boolean;
}

//Responsible: for rendering all the sidebar links
function NavList({ buttons, role }: { buttons: buttonsTypes[]; role: string }) {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {buttons.map((button) => (
        <NavItem button={button} role={role} key={button.title} />
      ))}
    </ul>
  );
}

export default NavList;
