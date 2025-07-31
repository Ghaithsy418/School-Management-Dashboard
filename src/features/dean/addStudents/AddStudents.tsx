import MainContainer from "@/ui/MainContainer";
import AddStudentsForm from "./AddStudentsForm";
import { useTranslation } from "react-i18next";

function AddStudents() {
  const { t } = useTranslation("students");

  return (
    <MainContainer title={t("addStudents.title")} needsBackArrow={true}>
      <AddStudentsForm />
    </MainContainer>
  );
}

export default AddStudents;
