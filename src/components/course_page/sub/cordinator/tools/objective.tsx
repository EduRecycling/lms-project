import { FaCheckCircle } from "react-icons/fa";
import { Heading } from "../../../../landing/style";
import { LessonType } from "../../../../../../type";

const Objective = ({ lessons }: { lessons: LessonType[] }) => {
  return (
    <div className="objective w-full p-5">
      <div className="inner flex flex-col gap-3">
        <div className="top text-center">
          <Heading.h3>Lesson Objectives</Heading.h3>
          <p>By the end of the lesson you will:</p>
        </div>
        <div
          className="bot p-10 rounded-lg"
          style={{
            border: `1px solid #000`,
          }}
        >
          <ul className="flex gap-2 flex-col">
            {lessons.map((obj, index) => {
              return (
                <li className="flex items-center gap-2" key={index}>
                  <span className="icon">
                    <FaCheckCircle />
                  </span>
                  <span>{obj.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Objective;
