import SubString from "../../../functions/SubString";
import { Heading } from "../../landing/style";

interface CourseType {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Course = ({ course }: { course: CourseType }) => {
  return (
    <div className="offer-modal min-w-[300px] max-w-[320px] m-auto bg-[#fff] rounded-lg p-4 flex flex-col gap-2 shadow-lg animate__animated animate__fadeInUp wow self-stretch">
      <div className="img-box w-full h-[200px] min-h-[220px] bg-[#ddd] rounded overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="description max-h-[80px] overflow-hidden">
        <Heading.h4 className="title font-semibold">{course.title}</Heading.h4>
        <p className="description pt-1">{SubString(course.description, 60)}</p>
      </div>
    </div>
  );
};

export default Course;
