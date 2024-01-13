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
  courses: course[] | null;
  certificates: certificate[] | null;
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
};
type feedback = {
  id: string;
  email: string;
  fullname: string;
  message: string;
  uid: string;
};
