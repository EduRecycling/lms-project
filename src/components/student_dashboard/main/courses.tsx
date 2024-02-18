/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronRight } from "react-icons/fa6";
import { Heading } from "../../landing/style";
import Course from "../UI/Course";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";

const Courses = () => {
  return (
    <div className="courses-container flex flex-col gap-1">
      <div className="header">
        <Heading.h3>My Courses</Heading.h3>
        <p>Course you have enrolled for</p>
      </div>
      <div className="dwell flex justify-end items-center">
        <Link to="/student/explore">
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
        {data.map((course) => {
          return <Course course={course} />;
        })}
        {data.length < 1 && (
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

const data: any[] = [
  //   {
  //     id: "1",
  //     title: "Community Development Projects",
  //     description: `Community Development Projects
  // Get featured in community development portfolios for a better
  // greener economy`,
  //     image: "/images/offerings/community.png",
  //   },
  //   {
  //     id: "2",
  //     title: "Kids Recycling's Projects",
  //     description: `Get your kids recycling's projects featured in our portfolio for a better
  // and greener economy`,
  //     image: "/images/offerings/kids.png",
  //   },
  //   {
  //     id: "3",
  //     title: "Recyclying Hackathon Projects",
  //     description: `Introducing a platform for recyclying hackathon for a better
  // green economy`,
  //     image: "/images/offerings/hackathon.png",
  //   },
];
