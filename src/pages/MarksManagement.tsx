import MarksLayout from "@/features/teachers/marksManagement/MarksLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function MarksManagement() {
  useEffect(function () {
    document.title = "Marks";
  }, []);

  return (
    <MainContainer title="Marks Management">
      <MarksLayout />
    </MainContainer>
  );
}

export default MarksManagement;
