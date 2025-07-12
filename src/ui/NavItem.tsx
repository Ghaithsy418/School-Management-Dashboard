import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

interface buttonsTypes {
  title: string;
  value: string;
  icon: ReactNode;
  immediateLink: boolean;
}

//Responsible: for rendering a single sidebar link
function NavItem({ button, role }: { button: buttonsTypes; role: string }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      className="group z-0 w-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <NavLink
        to={
          button.immediateLink
            ? `${button.value}`
            : `/${role}/${button.value.toLowerCase()}`
        }
        className={({ isActive }) =>
          `relative flex cursor-pointer items-center gap-5 rounded-lg px-4 py-2.5 ${isActive ? "bg-indigo-200/50" : ""}`
        }
      >
        <span
          className={`transition-transform duration-200 group-hover:scale-[1.08] ${button.title === "Settings" ? "duration-500 group-hover:rotate-180" : ""}`}
        >
          {button.icon}
        </span>
        {button.title}
        <span
          style={{
            transform: isHover ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute left-0 -z-10 h-full w-full origin-left rounded-lg bg-indigo-200 px-4 py-2 transition-transform duration-300 ease-out"
        ></span>
      </NavLink>
    </li>
  );
}

export default NavItem;
