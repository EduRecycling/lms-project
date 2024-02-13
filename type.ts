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
  type: "video" | "article";
  file?: File | null;
  article?: string;
  references: Reference[];
  tests?: Test[];
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
