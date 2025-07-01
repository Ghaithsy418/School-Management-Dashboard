import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import StudentClassesRow from "./StudentClassesRow";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
  student_id: number;
}

function StudentsList({ students }: { students: StudentsClassesTypes[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: students.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-full w-full overflow-auto">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={students[virtualItem.index].student_id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <StudentClassesRow student={students[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsList;
