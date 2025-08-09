import { StudentsAbsenceTypes } from "@/utils/types";

interface AbsenceItemsTypes {
  absences: StudentsAbsenceTypes[];
}

export default function StudentsAbsenceItems({ absences }: AbsenceItemsTypes) {
  return (
    <div className="w-auto items-start gap-8">
      <div className="rounded-2xl bg-white px-6 dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Student's Absence
        </h1>
        <div className="space-y-6">
          {absences.map((session) => (
            <div key={session.session}>
              <h2 className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-300">
                Session {session.session}
              </h2>
              <ul className="space-y-3">
                {session.students.map((student) => (
                  <li
                    key={student.studentId}
                    className="rounded-xl bg-slate-50 p-4 shadow-sm dark:bg-gray-700"
                  >
                    <p className="font-medium text-gray-800 dark:text-white">
                      {student.full_name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
