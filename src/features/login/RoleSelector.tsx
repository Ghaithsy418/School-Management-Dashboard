import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { GiTeacher } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineSupervisorAccount } from "react-icons/md";

interface roleTypes {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<FieldValues>;
}

function RoleSelector({ role, setRole, register }: roleTypes) {
  console.log(role);
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string,
  ) {
    e.preventDefault();
    setRole(value);
  }

  return (
    <div className="mb-2 flex w-96 items-center justify-between gap-5">
      <input
        type="hidden"
        value={role}
        {...register("role", {
          validate: {
            hasPattern: () => role !== "" || "You should choose a role!",
          },
        })}
      />
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => handleClick(e, option.value)}
          className={`flex w-30 cursor-pointer items-center ${role === option.value ? "bg-indigo-200/40 outline-gray-700/10" : "bg-indigo-50 outline-gray-700/20"} justify-center gap-2 rounded-md px-4 py-3 text-sm outline-1 transition-all duration-200 hover:bg-indigo-100`}
        >
          <span className="text-indigo-700">{option.icon}</span> {option.name}
        </button>
      ))}
    </div>
  );
}

const options = [
  {
    name: "Teacher",
    value: "teacher",
    icon: <GiTeacher className="h-5 w-5" />,
  },
  {
    name: "Supervisor",
    value: "supervisor",
    icon: <MdOutlineSupervisorAccount className="h-5 w-5" />,
  },
  {
    name: "Manager",
    value: "manager",
    icon: <GrUserManager className="h-5 w-5" />,
  },
];

export default RoleSelector;
