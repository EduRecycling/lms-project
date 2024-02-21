/* eslint-disable @typescript-eslint/no-explicit-any */
import { VscEmptyWindow } from "react-icons/vsc";
import Course from "../UI/Course";
import courses from "../../../data/courses";

const Courses = () => {
  return (
    <div className="courses-container flex flex-col gap-1">
      <div
        className="courses gap-4 p-2 flex flex-wrap justify-center max-w-[1080px] m-auto"
        style={{
          gap: "1rem",
        }}
      >
        {courses.map((course) => {
          return <Course course={course} />;
        })}
        {courses.length < 1 && (
          <div className="more flex flex-col items-center justify-center gap-2 mt-4 ta-c">
            <div className="circle w-[240px] h-[240px] bg-secondary-10 text-[#fff] text-[6rem] grid place-content-center place-items-center rounded-full">
              <VscEmptyWindow />
            </div>
            <p className="text-center">No course(s) avialable at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
