/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { Heading } from "../../landing/style";
import { BiBook, BiCheckSquare, BiMinus } from "react-icons/bi";

import { useState } from "react";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CourseType, ModuleType } from "../../../../type";

const Outline = ({ course }: { course: CourseType }) => {
  const [view, setView] = useState(undefined);
  const [isLesson, setIsLesson] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="Outline flex flex-col gap-20">
      <div className="top min-h-svh bg-Primary_90 p-20 flex gap-3 flex-col justify-center items-center">
        <div className="opt flex w-full">
          <button
            className="back w-14 h-14 text-xl rounded-full bg-[#fff] grid place-content-center place-items-center hover:opacity-80"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="inner flex flex-col md:flex-row gap-14 justify-center w-full">
          <div className="if basis-[50%] flex flex-col gap-5 max-w-[740px]">
            <div className="header-t">
              <Heading.h2 className="font-semibold">{course.title}</Heading.h2>
              <p className="pt-2">{course.description}</p>
            </div>
            <div
              className="opt-out"
              style={{
                border: "1px solid #000",
              }}
            >
              <div
                className="vad w-full p-6 px-9 text-lg flex justify-between items-center"
                style={{
                  borderBottom: "1px solid #000",
                }}
              >
                <div className="op flex gap-1 items-center">
                  <BiCheckSquare />
                  <span>Enrolled</span>
                </div>
                <div className="va">
                  <span>{course.enrolled}</span>
                </div>
              </div>
              <div
                className="vad w-full p-6 px-9 text-lg flex justify-between items-center"
                style={{
                  borderBottom: "1px solid #000",
                }}
              >
                <div className="op flex gap-1 items-center">
                  <BsClock />
                  <span>Duration</span>
                </div>
                <div className="va">
                  <span>{course.duration}</span>
                </div>
              </div>
              <div
                className="vad w-full p-6 px-9 text-lg flex justify-between items-center"
                style={{
                  borderBottom: "1px solid #000",
                }}
              >
                <div className="op flex gap-1 items-center">
                  <BiBook />
                  <span>Lessons</span>
                </div>
                <div className="va">
                  <span>{course.modules.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="media basis-[50%] bg-Primary_10 rounded-lg overflow-hidden max-w-[540px] max-h-[380px]">
            <img
              src={course.image}
              className="w-full h-full object-contain"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="more">
        <div className="heading-r bg-Primary_90 text-secondary-10 p-10 px-20">
          <div className="inner flex gap-5 font-semibold text-lg">
            <button
              className={`lesson capitalize ${
                isLesson && "underline"
              } hover:opacity-80`}
              onClick={() => {
                setIsLesson(true);
              }}
            >
              Lessons
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setIsLesson(false);
              }}
              className={`lesson capitalize ${
                !isLesson && "underline"
              } hover:opacity-80`}
            >
              Course highlights
            </button>
          </div>
        </div>
        <div className="div">
          {isLesson && (
            <div className="body-r p-10 flex gap-4 flex-col">
              {course.modules.map((lesson, index) => {
                return (
                  <Line
                    lesson={lesson}
                    view={view}
                    setView={setView}
                    key={index}
                  />
                );
              })}
            </div>
          )}
          {!isLesson && (
            <div
              className={`line animated rounded-lg p-5 px-8 overflow-hidden w-full max-w-[1020px] mx-auto my-10`}
              style={{
                border: "1px solid #000",
              }}
            >
              <ul className="list-disc p-4 flex flex-col gap-1 text-xl">
                {course.modules.map((highline, index) => {
                  return <li key={index}>{highline.title}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Line = ({
  lesson,
  view,
  setView,
}: {
  lesson: ModuleType;
  view: object | undefined | null;
  setView: any;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`line animated rounded-lg p-5 px-8 ${
        view !== lesson ? `max-h-[75px] zoomIn` : "bg-primary-90"
      } overflow-hidden w-full max-w-[1020px] m-auto cursor-pointer hover:bg-primary-90`}
      style={{
        border: "1px solid #000",
      }}
      onClick={() => {
        setView(lesson);
      }}
    >
      <div
        className="title pb-4 font-semibold flex justify-between gap-2 items-center"
        style={{
          borderBottom: "1px solid #000",
        }}
      >
        <p className="b-t text-xl capitalize flex gap-1">
          <span>{lesson.sn}.</span>
          <span>{lesson.title}</span>
        </p>
        <div className="rit flex items-center gap-2">
          {lesson.locked ? (
            <button className="start bg-primary-80 p-2 px-5 rounded-md font-semibold hover:opacity-80">
              Locked
            </button>
          ) : (
            <button
              className="start bg-Primary_10 text-secondary-100 p-2 px-5 rounded-md font-semibold hover:opacity-80"
              onClick={() => {
                navigate(`../lesson/${lesson.sn}`);
              }}
            >
              Start Lesson
            </button>
          )}

          <button className="text-lg hover:opacity-80">
            {view === lesson ? <BiMinus /> : <FaPlus />}
          </button>
        </div>
      </div>
      <div className="more min-h-[120px]">
        <ul className="list list-disc p-4 flex flex-col gap-1">
          {lesson.objectives.map((l) => {
            return <li>{l.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Outline;
