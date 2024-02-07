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
      <Input
        title="Description"
        value={courseInfo.description}
        name="description"
        placeholder="Enter The Course Description"
        onchange={handleCourseInfoChange}
      />

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
