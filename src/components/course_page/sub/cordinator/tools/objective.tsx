import { FaCheckCircle } from "react-icons/fa";
import { Heading } from "../../../../landing/style";

const Objective = () => {
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
            {objectives.map((obj, index) => {
              return (
                <li className="flex items-center gap-2" key={index}>
                  <span className="icon">
                    <FaCheckCircle />
                  </span>
                  <span>{obj}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const objectives = [
  "What is negotiation",
  "Who is an Effective Negotiator?",
  "Why do we Negotiation",
  "Charateristics of Negotiation",
  "The Benefits of Negotiation",
  "The Types of Negotiation",
  "Skills for Negotiation",
];

export default Objective;
