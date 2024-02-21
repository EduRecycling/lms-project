export type user = {
  userInfo: {
    uid: string;
    displayname: string;
    photourl: string;
    phonenumber: string;
    email: string;
    country: string;
  };
  active: boolean;
  courses: course[] | [];
  certificates: certificate[] | [];
};

export type course = {
  id: string;
  name: string;
  type: "kids" | "community" | "goverment" | "other courses";
  source: string;
  sourceType: "blog" | "video" | string;
};
export type certificate = {
  id: string;
  courseId: string;
  uid: string;
};
export type feedback = {
  id: string;
  email: string;
  fullname: string;
  message: string;
  uid: string;
};
export type CourseFormValues = {
  title: string;
  description: string;
  image: string;
  modules: Module[];
  references: Reference[];
};

export type Module = {
  title: string;
  description: string;
  image: File | null;
  type: string;
  file?: File | null;
  article?: string;
  references: Reference[];
  tests?: Test[];
  id: string | number;
  sn: string | number;
  locked?: boolean;
  objectives: ObjectiveType[];
  lessons: LessonType[];
};

export type ObjectiveType = {
  title: string;
  markup: string;
};

export type LessonType = {
  id: string | number;
  type: string;
  title: string;
  markup: string;
};

export type Reference = {
  text: string;
  url?: string;
};

export type Test = {
  question: string;
  options: string[];
  correctAnswer: string;
  references?: Reference[];
};

export type CourseType = {
  id: string;
  title: string;
  description: string;
  about: string[];
  image: string;
  objectives: string[];
  duration: string;
  type: string;
  price: string;
  locked?: boolean;
  certificate: {
    link: string;
  };
  enrolled: number;
  language: string[];
  modules: Module[];
};

export type ModuleType = {
  id: string | number;
  sn: string | number;
  locked?: boolean;
  title: string;
  objectives: {
    title: string;
    markup: string;
  }[];
};
