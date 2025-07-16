export interface StudentTypes {
  full_name: string;
  user_id: number;
  student_id: number;
  class_name: string;
  class_id: number;
  gpa: number;
  email: string;
  phone: string;
  photo: string;
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

export interface AddStudentTypes {
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

export interface SubjectTypes {
  id: number;
  subjectName: string;
  minMark: number;
  maxMark: number;
  grade: number;
}

export interface CreatePostTypes {
  event_name: string;
  post: string;
  photos: FileList;
}

export interface EventTypes {
  id: number;
  user_id: number;
  publisherName: string;
  role: string;
  media: { id: number; url: string }[];
  event_name: string;
  post: string;
  created_at: string;
  comment_number: number;
  reaction_number: number;
}

export interface CommentsTypes {
  id: number;
  user_id: number;
  parent_id?: number;
  name: string;
  middle_name: string;
  last_name: string;
  role: string;
  content: string;
  reaction_number: number;
  created_at: string;
  replies: CommentsTypes[];
}
