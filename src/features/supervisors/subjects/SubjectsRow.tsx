import { SubjectTypes } from "@/utils/types";

interface SubjectsRowTypes {
  subject: SubjectTypes;
}

function SubjectsRow({ subject }: SubjectsRowTypes) {
  const { subjectName, minMark, maxMark } = subject;
  return (
    <div>
      <h4 className="font-semibold">{subjectName}</h4>
      <p>{minMark}</p>
      <p>{maxMark}</p>
      <div></div>
    </div>
  );
}

export default SubjectsRow;
