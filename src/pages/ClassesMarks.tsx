import ClassesMarksLayout from "@/features/teachers/marksManagement/classesMarks/ClassesMarksLayout";
import MainContainer from "@/ui/MainContainer";

function ClassesMarks() {
  return (
    <MainContainer needsBackArrow={true} toPage="/teacher/marks">
      <ClassesMarksLayout />
    </MainContainer>
  );
}

export default ClassesMarks;
