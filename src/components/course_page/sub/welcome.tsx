import { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCertificate, FaClock, FaLanguage } from "react-icons/fa6";
import { Heading } from "../../landing/style";
import { CourseType } from "../../../../type";
import { useNavigate } from "react-router-dom";

const Welcome = ({ course }: { course: CourseType }) => {
  const stats = [
    {
      id: "1",
      icon: <FaClock />,
      value: "duration",
      key: course.duration,
    },
    {
      id: "2",
      icon: <CgProfile />,
      value: course.type,
      key: course.price,
    },
    {
      id: "3",
      icon: <FaCertificate />,
      value: "certificate",
      key: course.certificate ? "Yes" : "No",
    },
    {
      id: "4",
      icon: <FaLanguage />,
      value: "language",
      key: course.language.join(","),
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="index flex flex-col gap-5 pt-20">
      <div className="top bg-Primary_90 text-secondary-10 p-14 flex justify-center items-center">
        <div className="inner text-center">
          <Heading.h2 className="font-semibold capitalize">
            {course.title}
          </Heading.h2>
          <p>Your partner in learning about how to recycle any kind of items</p>
        </div>
      </div>
      <div className="About p-8">
        <div className="inner flex flex-col md:flex-row justify-center gap-3">
          <div className="info basis-[50%] max-w-[540px]">
            <Heading.h3 className="font-semibold">About the Course</Heading.h3>
            <div className="sumary mt-2 flex gap-3 flex-col">
              {course.about.map((desc: string, index) => {
                return (
                  <p className="py-2" key={index}>
                    {desc}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="others basis-[50%] bg-Primary_90 text-secondary-10 max-w-[320px] overflow-hidden rounded-xl">
            <div className="stats p-5 px-6 flex gap-3 flex-col">
              {stats.map((stat, index) => {
                return <Stat stat={stat} key={index} />;
              })}
            </div>
            <button
              className="bg-Primary_10 text-secondary-100 w-full p-4 font-semibold"
              onClick={() => {
                navigate("outline");
              }}
            >
              Enroll for free
            </button>
          </div>
        </div>
      </div>
      <div className="Outcomes p-8 max-w-[940px] m-auto">
        <Heading.h3 className="font-semibold">Key Learning Outcomes</Heading.h3>
        <div className="info my-3">
          <p>In this course you will learn</p>
          <ul className="list list-disc ml-5 py-2">
            {course.objectives.map((r, index) => {
              return <li key={index}>{r}</li>;
            })}
          </ul>
          {course.about.map((desc: string, index) => {
            return (
              <p className="py-2" key={index}>
                {desc}
              </p>
            );
          })}
        </div>
        <button
          className="bg-Primary_10 text-secondary-100 p-2 px-12 rounded-sm font-semibold"
          onClick={() => navigate("outline")}
        >
          Enroll for free
        </button>
      </div>
    </div>
  );
};

export default Welcome;

const Stat = ({
  stat,
}: {
  stat: {
    icon: ReactElement;
    value: string;
    key: string;
  };
}) => {
  return (
    <div className="duration flex items-center gap-3">
      <div className="icon w-8 h-8 max-w-8 max-h-8 min-w-8 min-h-8 text-lg rounded-full grid place-content-center place-item-center text-primary-50 bg-secondary-100">
        {stat.icon}
      </div>
      <div className="text flex flex-col">
        <span className="capitalize">{stat.value}</span>
        <span className="capitalize">{stat.key}</span>
      </div>
    </div>
  );
};
