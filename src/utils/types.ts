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

export interface SpecificStudentTypes {
  full_name: string;
  student_id: number;
  email: string;
  phone: string;
  school_graduated_from: string;
  gpa: number;
  class_name: string;
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
  reactions: {
    reaction_number: number;
    types: string[];
  };
  is_reacted: boolean;
  user_reaction_type: string;
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
  created_at: string;
  replies: CommentsTypes[];
  reactions: {
    reaction_number: number;
    types: string[];
  };
  is_reacted: boolean;
  user_reaction_type: string;
}

export interface StudentMarkTypes {
  subject_name: string;
  min_mark: 60;
  max_mark: 100;
  mark: 80;
}

export interface ClassMarkTypes {
  full_name: string;
  subject_name: string;
  min_mark: 60;
  max_mark: 100;
  mark: 80;
}

export interface StudentMarksBranchesTypes<T> {
  "mid-term": T[];
  final: T[];
}
