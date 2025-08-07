import ComplaintsLayout from "@/features/dean/complaints/ComplaintsLayout";
import { changeUi, useComplaints } from "@/slices/complaintsSlice";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

function Complaints() {
  const { ui } = useComplaints();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center gap-5 px-9.5 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Complaints Management</h2>
        <button
          onClick={() =>
            dispatch(
              changeUi(ui === "withoutTrash" ? "trashedOnly" : "withoutTrash"),
            )
          }
          className="transiton-all flex items-center justify-center gap-1 rounded-lg bg-rose-50 px-7 py-2.5 text-rose-500 shadow-sm shadow-violet-950/20 duration-300 hover:text-rose-600 hover:shadow-md active:shadow-xs"
        >
          {ui === "withoutTrash"
            ? "Show Trashed Complaints"
            : "Return to Original Complaints"}
          {ui === "withoutTrash" && <MdDeleteOutline className="h-5 w-5" />}
        </button>
      </div>
      <ComplaintsLayout />
    </div>
  );
}

export default Complaints;
