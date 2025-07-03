import SubjectsLayout from "@/features/supervisors/subjects/SubjectsLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function Subjects() {
  useEffect(function () {
    document.title = "Subjects";
  }, []);

  return (
    <MainContainer title="Subjects Management">
      <SubjectsLayout />
    </MainContainer>
  );
}

export default Subjects;
