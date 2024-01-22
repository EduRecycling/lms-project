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
