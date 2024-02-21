import { Link } from "react-router-dom";
import SubString from "../../../functions/SubString";
import { Heading } from "../../landing/style";
import { CourseType } from "../../../../type";

const Course = ({ course }: { course: CourseType }) => {
  return (
    <Link
      to={`/course/${course.id}`}
      className="w-fit h-fit min-w-fit min-h-fit max-w-fit max-h-fit flex-shrink"
    >
      <div className="offer-modal min-w-[300px] max-w-[320px] m-auto bg-[#fff] rounded-lg p-4 flex flex-col gap-2 shadow-lg animate__animated animate__fadeInUp wow self-stretch">
        <div className="img-box w-full h-[200px] min-h-[220px] bg-[#ddd] rounded overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="description max-h-[80px] overflow-hidden">
          <Heading.h4 className="title font-semibold">
            {course.title}
          </Heading.h4>
          <p className="description pt-1">
            {SubString(course.description, 60)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Course;

// const test = () => {
//   return (
//     <div className="t flex flex-col gap-1">
//       <p className="font-semiboold">Exercise 1: What is landfill?</p>
//       <p>
//         Landfill is where our trash, also referred to as municipal solid waste
//         (MSW), is buried.
//       </p>
//       <img
//         src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fnational-grid-coverage-areas-waste-recycling-paper-landfill-infographic-png%2FyDZDKkm1&psig=AOvVaw22_v7-Kaa3SQ6KB5kSYbVC&ust=1708631263166000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjaupvNmb2EAxVMUkEAHULyDCoQjRx6BAgAEBc"
//         alt="."
//         className="w-100 max-w-fill"
//       />
//       <div className="types flex flex-col gap-4">
//         <p className="font-semibold">
//           There are two different types of landfills:
//         </p>
//         <ul>
//           <li>- An unlined landfill, which does not have a liner</li>
//           <li>
//             - A lined landfill, which has a liner system underneath all of the
//             MSW.
//           </li>
//         </ul>
//         <p>
//           Lined landfills are a great example of using science, technology,
//           engineering, and math to improve the safe placement and compaction of
//           the public{`’`}s trash.
//         </p>
//       </div>
//       <div className="video w-full max-w-full">
//         <video src="https://www.youtube.com/watch?v=lIqHBHto06w">Landing</video>
//       </div>
//     </div>
//   );
// };
