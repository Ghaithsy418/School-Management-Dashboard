export interface StudentTypes {
  name: string;
  id: string;
  address: string;
  grade: string;
  GPA: number;
  email: string;
  phoneNumber: string;
}

export interface UserTypes {
  email: string;
  id: number;
  lastName: string;
  middleName: string;
  name: string;
  phoneNumber: string;
  role: string;
}

export interface TeacherSupervisorTypes {
  name: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  phoneNumber: string;
  certification: FileList;
  photo: FileList;
  subject: string;
  salary?: number;
}

export interface StudentTypes {
  email: string;
  password: string;
  name: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  previousCertification: FileList;
  photo: FileList;
  class: string;
  parentName: string;
  parentMiddleName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  parentEmail: string;
  parentPassword: string;
  parentJob: string;
}

export interface ClassTypes {
  id: number;
  className: string;
  studentsNum: number;
  currentStudentNumber: number;
}
