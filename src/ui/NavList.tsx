import { NavLink } from "react-router";

function NavList({ buttons, role }: { buttons: unknown; role: string }) {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {Array.isArray(buttons) &&
        buttons.map((button) => (
          <li key={button.title} className="hover-icons w-full">
            <NavLink
              to={`/${role}/${button.title.toLowerCase()}`}
              className={({ isActive }) =>
                `flex cursor-pointer items-center gap-5 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-indigo-200 ${isActive ? "bg-indigo-300/70" : ""}`
              }
            >
              <span>{button.icon}</span>
              {button.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default NavList;
