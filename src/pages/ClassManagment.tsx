import ClassesProvider from "@/context/ClassesUi";
import Classes from "@/features/supervisors/classesManagement/Classes";
import MainContainer from "@/ui/MainContainer";

function ClassManagment() {
  return (
    <MainContainer title="Classes Management">
      <ClassesProvider>
        <Classes />
      </ClassesProvider>
    </MainContainer>
  );
}

export default ClassManagment;
