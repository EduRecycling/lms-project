import Editor from "../editor";
import FileUI from "./FileUI";
import Input from "./Input";

type CourseInfoType = { title: string; description: string; image: null | any };
type prop = {
  courseInfo: CourseInfoType;
  setCourseInfo: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      image: null;
    }>
  >;
};

export default function CourseInfo({ courseInfo, setCourseInfo }: prop) {
  const handleEditorChange = (content: string) => {
    setCourseInfo((prevInfo: CourseInfoType) => ({
      ...prevInfo,
      description: content,
    }));
  };
  const handleCourseInfoChange = (e: any) => {
    const { name, value, files } = e.target;
    setCourseInfo((prevInfo: CourseInfoType) => ({
      ...prevInfo,
      [name]: name === "image" ? files![0] : value,
    }));
    console.log(courseInfo);
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold py-4">
        Course Information
      </h2>
      <Input
        title="Title"
        value={courseInfo.title}
        name="title"
        placeholder="Enter The Course Title"
        onchange={handleCourseInfoChange}
      />

      <Editor handleEditorChange={handleEditorChange} feedback />
      <FileUI
        title="Course Image"
        // ref={image}
        desc={"Upload Course Image"}
        onChange={(e: any) => {
          console.log("image picked", courseInfo.image);
          handleCourseInfoChange(e);
          console.log("image selected", courseInfo.image);
        }}
        name={"image"}
        type="image/*"
        multiple
      />
      {courseInfo.image ? (
        <img
          src={URL.createObjectURL(courseInfo.image)}
          alt="course banner"
          className="w-full min-h-[300px] object-contain h-[30vh]  my-7 flex flex-col items-center justify-center "
        />
      ) : (
        ""
      )}
    </div>
  );
}
