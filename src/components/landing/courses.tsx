import { Bend, BtnIcon } from "./style";
import { FaMoneyBill } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";

const Courses = () => {
  return (
    <div className="courses text-white bg-[#082100] p-12 w-full h-svh flex">
      <Bend className="inner flex w-full items-center gap-5 justify-center">
        <div className="heading">
          <h3 className="bend-cent text-3xl flex flex-col gap-0">
            <span> Edurecycling</span>
            <span>Courses</span>
          </h3>
        </div>
        <div className="voke overflow-x-hidden relative w-full">
          <div className="nid absolute w-full z-50 p-2 translate-[(0, -50%)] top-[50%]">
            <BtnIcon className="goto font-mono bg-green-500 text-black float-left">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </BtnIcon>
            <BtnIcon className="goto font-mono bg-green-500 text-black float-right">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </BtnIcon>
          </div>
          <div className="w-full scroll-box overflow-x-auto pb-4">
            <div className="sub w-full flex gap-5">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </div>
          </div>
        </div>
      </Bend>
    </div>
  );
};

export default Courses;

const Course = () => {
  return (
    <div className="course-modal flex flex-col bg-white w-[calc(280px + 5vmin)] min-w-[280px] max-w-[340px] text-black p-4 rounded-lg gap-3">
      <div className="img-box w-full h-[280px] rounded-md bg-black overflow-hidden">
        <img
          src="/images/courses/kid.png"
          alt="kid recycling"
          className="transition hover:scale-110"
        />
      </div>
      <div className="text-box flex flex-col gap-1">
        <div className="title">
          <h5 className="text-lg font-semibold">Kids Recyclying</h5>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            quidem beatae et id atque laudantium iste, odit ab fuga distinctio!
          </p>
        </div>
        <div className="other flex items-center justify-between text-lg">
          <div className="price-tag flex items-center gap-1">
            <span>
              <FaMoneyBill />
            </span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="direct-to">
            <span>
              <MdEvent />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
