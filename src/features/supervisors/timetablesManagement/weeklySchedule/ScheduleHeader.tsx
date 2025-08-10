import { BookOpen } from "lucide-react";
import ClearScheduleInputs from "./ClearScheduleInputs";
import SaveSchedule from "./SaveSchedule";

function ScheduleHeader() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Weekly Class Schedule</h1>
            <p className="text-sm text-white/80">
              Create and manage your teaching schedule
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <ClearScheduleInputs />
          <SaveSchedule />
        </div>
      </div>
    </header>
  );
}

export default ScheduleHeader;
