type user = {
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

type course = {
  id: string;
  name: string;
  type: "kids" | "community" | "goverment" | "other courses";
  source: string;
  sourceType: "blog" | "video" | string;
};
type certificate = {
  id: string;
  courseId: string;
  uid: string;
};
type feedback = {
  id: string;
  email: string;
  fullname: string;
  message: string;
  uid: string;
};
