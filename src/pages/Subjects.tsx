import SubjectsLayout from "@/features/supervisors/subjects/SubjectsLayout";
import { useEffect } from "react";

function Subjects() {
  useEffect(function () {
    document.title = "Subjects";
  }, []);

  return <SubjectsLayout />;
}

export default Subjects;
