import { Bend, CustomScroll } from "./style";
import { FaMoneyBill } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import Goto from "./Goto";

interface CourseType {
  id: string;
  title: string;
  description: string;
  price: string | undefined | null;
  link: string;
  image: string;
}

const data = [
  {
    id: "1",
    title: "Community Recylying",
    description: `Recycling programs promote community engagement and collaboration. They bring residents together, fostering a sense of unity and shared knowledge.`,
    price: null,
    link: "",
    image: "/images/courses/community.png",
  },
  {
    id: "2",
    title: "Kids Recylying",
    description: `Taking care of the planet isn't just for Earth Day! Read on to learn about how to teach your children what it is to make a difference every day by reducing, reusing, and recycling!`,
    price: null,
    link: "",
    image: "/images/courses/kid.png",
  },

  {
    id: "3",
    title: "Resource Recylying",
    description: `Resource recycling reduces the amount of waste discharged into the global environment. The waste reduction achieved by thorough recycling is substantial.`,
    price: null,
    link: "",
    image: "/images/courses/resource.png",
  },
];

const Courses = () => {
  return (
    <div className="courses text-white bg-[#082100] p-[5%] w-full min-h-svh h-full flex">
      <Bend className="inner flex w-full items-center gap-5 justify-center">
        <div className="heading">
          <h3 className="bend-cent text-3xl flex flex-col gap-0">
            <span> Edurecycling</span>
            <span>Courses</span>
          </h3>
        </div>
        <div className="voke overflow-x-hidden relative w-full">
          <Goto />
          <CustomScroll className="scroll-box overflow-x-auto pb-4">
            <div className="let sub flex gap-5">
              {data.map((course: CourseType) => {
                return <Course course={course} key={course.id} />;
              })}
            </div>
          </CustomScroll>
        </div>
      </Bend>
    </div>
  );
};

export default Courses;

const Course = ({ course }: { course: CourseType }) => {
  return (
    <div className="course-modal flex flex-col bg-white text-secondary-10 w-[calc(280px + 5vmin)] min-w-[290px] max-w-[340px] text-black p-4 rounded-lg gap-3 animate__animated animate__fadeInRight wow">
      <div className="img-box w-full h-[280px] rounded-md bg-secondary-50 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="transition hover:scale-110"
        />
      </div>
      <div className="text-box flex flex-col gap-1">
        <div className="title">
          <h5 className="text-lg font-semibold">{course.title}</h5>
        </div>
        <div className="description">
          <p>{course.description}</p>
        </div>
        <div className="other flex items-center justify-between text-lg">
          <div className="price-tag flex items-center gap-1">
            <span>
              <FaMoneyBill />
            </span>
            <span className="font-semibold">
              {course.price ? course.price : "Free"}
            </span>
          </div>
          <div className="direct-to">
            <span>
              <IoMdCalendar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
