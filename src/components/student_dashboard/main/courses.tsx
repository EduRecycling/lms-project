import { FaChevronRight, FaDownload } from "react-icons/fa6";
import { Heading } from "../../landing/style";

const Courses = () => {
  return (
    <div className="courses-container flex flex-col gap-1">
      <div className="header">
        <Heading.h3>My Courses</Heading.h3>
        <p>Course you have enrolled for</p>
      </div>
      <div className="dwell flex justify-end items-center">
        <button className="flex gap-1 items-center font-semibold text-lg p-1 px-2">
          <span>Explore Courses</span>
          <FaChevronRight />
        </button>
      </div>
      <div
        className="courses flex flex-wrap gap-4 p-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <div className="more flex flex-col items-center justify-center gap-2 mt-4">
          <div className="circle w-[240px] h-[240px] bg-secondary-10 text-[#fff] text-[6rem] grid place-content-center place-items-center rounded-full">
            <FaDownload />
          </div>
          <p>You are not enrolled in any course at the moment</p>
        </div>
        {/* <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course /> */}
      </div>
    </div>
  );
};

const Course = () => {
  return (
    <div className="offer-modal min-w-[300px] max-w-[320px] m-auto bg-[#fff] rounded-lg p-4 flex flex-col gap-2 shadow-lg animate__animated animate__fadeInUp wow self-stretch">
      <div className="img-box w-full h-[200px] min-h-[220px] bg-[#ddd] rounded overflow-hidden">
        {/* <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="description">
        <Heading.h4 className="title font-semibold">Leaving a life</Heading.h4>
        <p className="description">understand people</p>
      </div>
    </div>
  );
};

export default Courses;
