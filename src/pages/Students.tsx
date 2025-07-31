import { useEffect } from "react";
import StudentsTable from "@/features/students/StudentsTable";
import MainContainer from "@/ui/MainContainer";
import AttendanceStudentsButtons from "@/features/supervisors/attendanceAndAbsence/AttendanceStudentsButtons";
import { useTranslation } from "react-i18next";

//Responsible: for the students routes operators
function Students() {
  const { t } = useTranslation("students");
  useEffect(function () {
    document.title = "Students";
  }, []);

  const options = [
    { title: t("main.sortBy"), value: "" },
    { title: t("main.asc"), value: "asc-full_name" },
    { title: t("main.desc"), value: "desc-full_name" },
    { title: t("main.gpaAsc"), value: "asc-gpa" },
    { title: t("main.gpaDesc"), value: "desc-gpa" },
  ];

  return (
    <MainContainer title={t("main.mainTitle")}>
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-a-student"
          linkTitle={t("main.addStudentsButton")}
        >
          <AttendanceStudentsButtons />
        </MainContainer.Controls>
      </MainContainer.MainPageHeader>
      <StudentsTable />
    </MainContainer>
  );
}

export default Students;
