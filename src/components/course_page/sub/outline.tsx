/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { Heading } from "../../landing/style";
import { BiBook, BiCheckSquare, BiMinus } from "react-icons/bi";

import { useState } from "react";
import { BsClock } from "react-icons/bs";

const Outline = () => {
  const [view, setView] = useState(undefined);
  const [isLesson, setIsLesson] = useState(true);

  return (
    <div className="Outline flex flex-col gap-20">
      <div className="top bg-Primary_90 p-20 flex gap-3 flex-col justify-center items-center">
        <div className="opt flex w-full">
          <button className="back w-14 h-14 text-xl rounded-full bg-[#fff] grid place-content-center place-items-center hover:opacity-80">
            <FaArrowLeft />
          </button>
        </div>
        <div className="inner flex gap-14 justify-center w-full">
          <div className="if basis-[50%] flex flex-col gap-5 max-w-[740px]">
            <div className="header-t">
              <Heading.h2 className="font-semibold">
                The Art of Negotiation
              </Heading.h2>
              <p className="pt-2">
                The skill of Negotiation can be a deciding factor between you
                getting a contract, earning a higher paid salary, or settling
                industry disputes. It is indeed an art that everyone needs to
                excel in their chosen field.
              </p>
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
                  <span>1400</span>
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
                  <span>2 Weeks</span>
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
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
          <div className="media basis-[50%] bg-Primary_10 rounded-lg overflow-hidden max-w-[540px] max-h-[380px]">
            <img
              src="/images/courses/resource.png"
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
              {lessons.map((lesson) => {
                return <Line lesson={lesson} view={view} setView={setView} />;
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
                {lessons.map((highline) => {
                  return <li>{highline.title}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type LessonType = {
  sn: string;
  title: string;
  locked: boolean;
  outline: string[];
};

const Line = ({
  lesson,
  view,
  setView,
}: {
  lesson: LessonType;
  view: object | undefined | null;
  setView: any;
}) => {
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
        <p className="b-t text-xl capitalize">
          <span>{lesson.sn}.</span> {lesson.title}
        </p>
        <div className="rit flex items-center gap-2">
          {lesson.locked ? (
            <button className="start bg-primary-80 p-2 px-5 rounded-md font-semibold hover:opacity-80">
              Locked
            </button>
          ) : (
            <button className="start bg-Primary_10 text-secondary-100 p-2 px-5 rounded-md font-semibold hover:opacity-80">
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
          {lesson.outline.map((l) => {
            return <li>{l}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const lessons = [
  {
    id: "1",
    sn: "1",
    title: "Introduction",
    locked: false,
    outline: [
      "What is negotiation",
      "Who is an Effective Negotiator?",
      "Why do we Negotiation",
      "Charateristics of Negotiation",
      "The Benefits of Negotiation",
      "The Types of Negotiation",
      "Skills for Negotiation",
    ],
  },
  {
    id: "2",
    sn: "2",
    title: "Planning Your Negotiation",
    locked: true,
    outline: [
      "What is negotiation",
      "Who is an Effective Negotiator?",
      "Why do we Negotiation",
      "Charateristics of Negotiation",
      "The Benefits of Negotiation",
      "The Types of Negotiation",
      "Skills for Negotiation",
    ],
  },
  {
    id: "3",
    sn: "3",
    title: "Importance of Negotiation",
    locked: true,
    outline: [
      "What is negotiation",
      "Who is an Effective Negotiator?",
      "Why do we Negotiation",
      "Charateristics of Negotiation",
      "The Benefits of Negotiation",
      "The Types of Negotiation",
      "Skills for Negotiation",
    ],
  },
  {
    id: "4",
    sn: "4",
    title: "Test",
    locked: true,
    outline: [
      "What is negotiation",
      "Who is an Effective Negotiator?",
      "Why do we Negotiation",
      "Charateristics of Negotiation",
      "The Benefits of Negotiation",
      "The Types of Negotiation",
      "Skills for Negotiation",
    ],
  },
  {
    id: "5",
    sn: "5",
    title: "Exam",
    locked: true,
    outline: [
      "What is negotiation",
      "Who is an Effective Negotiator?",
      "Why do we Negotiation",
      "Charateristics of Negotiation",
      "The Benefits of Negotiation",
      "The Types of Negotiation",
      "Skills for Negotiation",
    ],
  },
];

export default Outline;
