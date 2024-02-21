/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronRight } from "react-icons/fa6";
import { Heading } from "../../landing/style";
import Course from "../UI/Course";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";
import courses from "../../../data/courses";

const Courses = () => {
  return (
    <div className="courses-container flex flex-col gap-1">
      <div className="header">
        <Heading.h3>My Courses</Heading.h3>
        <p>Course you have enrolled for</p>
      </div>
      <div className="dwell flex justify-end items-center">
        <Link to="/explore">
          <button className="flex gap-1 items-center font-semibold text-lg p-1 px-2">
            <span>Explore Courses</span>
            <FaChevronRight />
          </button>
        </Link>
      </div>
      <div
        className="courses gap-4 p-2 flex flex-wrap justify-center max-w-[1080px] m-auto"
        style={{
          gap: "1rem",
        }}
      >
        {courses.map((course, index) => {
          return <Course course={course} key={index} />;
        })}
        {courses.length < 1 && (
          <div className="more flex flex-col items-center justify-center gap-2 mt-4 ta-c">
            <div className="circle w-[240px] h-[240px] bg-secondary-10 text-[#fff] text-[6rem] grid place-content-center place-items-center rounded-full">
              <VscEmptyWindow />
            </div>
            <p className="text-center">
              You are not enrolled in any course at the moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
