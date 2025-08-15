import { getRandomStyle } from "@/utils/generateRandomColor";
import { ScheduleTypes } from "@/utils/types";

interface CellTypes {
  day: string;
  session: { title: string; value: number };
  weeklySchedule: ScheduleTypes[];
}

function WeeklyScheduleCell({ day, session, weeklySchedule }: CellTypes) {
  const currentCellContent = weeklySchedule.find(
    (cell) => cell.day === day && Number(cell.session) === session.value,
  );

  const { subject, className } = currentCellContent || {
    subject: "",
    className: "",
  };
  const randomColor = getRandomStyle(300);

  return (
    <td
      className={`overflow-hidden border border-gray-200 p-0 transition-colors hover:bg-gray-200`}
    >
      <div className={`h-28 p-3`}>
        <div className="h-full">
          {subject && className ? (
            <div
              style={{ ...randomColor, opacity: 0.9 }}
              className="flex h-full w-full flex-col justify-center space-y-2 rounded-md p-4"
            >
              <div
                className={` ${subject ? "text-gray-950" : "text-gray-800"} truncate font-bold`}
              >
                {subject}
              </div>

              <div className="truncate rounded-md bg-white/50 pl-2 text-sm text-gray-600">
                🏫 {className}
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </td>
  );
}

export default WeeklyScheduleCell;
