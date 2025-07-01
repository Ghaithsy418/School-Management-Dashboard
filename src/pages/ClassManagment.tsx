import Classes from "@/features/supervisors/classesManagement/Classes";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function ClassManagment() {
  useEffect(function () {
    document.title = "Classes";
  }, []);

  return (
    <MainContainer title="Classes Management">
      <Classes />
    </MainContainer>
  );
}

export default ClassManagment;
