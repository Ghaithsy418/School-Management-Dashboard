import AvatarGenerator from "@/ui/AvatarGenerator";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

function PostHead() {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center justify-center gap-2">
        <AvatarGenerator name="Ghaith Shabakji" />
        <div className="flex flex-col items-start justify-center">
          <h5 className="cursor-pointer font-semibold">Ghaith Shabakji</h5>
          <span className="text-sm font-light">- 4h -</span>
        </div>
      </div>
      <span>
        <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
      </span>
    </div>
  );
}

export default PostHead;
