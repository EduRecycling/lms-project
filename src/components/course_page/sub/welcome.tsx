import { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCertificate, FaClock, FaLanguage } from "react-icons/fa6";
import { Heading } from "../../landing/style";

const Welcome = () => {
  return (
    <div className="index flex flex-col gap-5 pt-20">
      <div className="top bg-Primary_90 text-secondary-10 p-14 flex justify-center items-center">
        <div className="inner text-center">
          <Heading.h2 className="font-semibold">
            Edurecycling For Kids Tutors
          </Heading.h2>
          <p>Your partner in learning about how to recycle any kind of items</p>
        </div>
      </div>
      <div className="About p-8">
        <div className="inner flex flex-col md:flex-row justify-center gap-3">
          <div className="info basis-[50%] max-w-[540px]">
            <Heading.h3 className="font-semibold">About the Course</Heading.h3>
            <div className="sumary mt-2 flex gap-3 flex-col">
              {about.description.map((desc: string) => {
                return <p className="text">{desc}</p>;
              })}
            </div>
          </div>
          <div className="others basis-[50%] bg-Primary_90 text-secondary-10 max-w-[320px] overflow-hidden rounded-xl">
            <div className="stats p-5 px-6 flex gap-3 flex-col">
              {data.map((stat) => {
                return <Stat stat={stat} />;
              })}
            </div>
            <button className="bg-Primary_10 text-secondary-100 w-full p-4 font-semibold">
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
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            modi asperiores cupiditate impedit, consequuntur earum deserunt
            cumque autem quisquam sapiente quaerat molestiae. Nihil provident
            assumenda ea vero porro, recusandae illo animi accusamus odit minus
            culpa reprehenderit dicta, deserunt laudantium in sunt quidem
            voluptate ab dolore ut delectus enim, quo maxime!
          </p>
        </div>
        <button className="bg-Primary_10 text-secondary-100 p-2 px-12 rounded-sm font-semibold">
          Enroll for free
        </button>
      </div>
    </div>
  );
};

export default Welcome;

const about = {
  description: [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolore atque odit, temporibus deleniti blanditiis asperiores ullam
              similique magni velit?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolore atque odit, temporibus deleniti blanditiis asperiores ullam
              similique magni velit?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolore atque odit, temporibus deleniti blanditiis asperiores ullam
              similique magni velit?`,
  ],
};

const data = [
  {
    id: "1",
    icon: <FaClock />,
    value: "duration",
    key: "2 Week",
  },
  {
    id: "2",
    icon: <CgProfile />,
    value: "kids tutors edurecycling courses",
    key: "Free",
  },
  {
    id: "3",
    icon: <FaCertificate />,
    value: "certificate",
    key: "Yes",
  },
  {
    id: "4",
    icon: <FaLanguage />,
    value: "language",
    key: "english",
  },
];

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
