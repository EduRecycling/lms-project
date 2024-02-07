import { Heading } from "../../landing/style";
import Courses from "./courses";

const Explore = () => {
  return (
    <div className="explore p-1 flex flex-col gap-3">
      <div className="Topper">
        <Heading.h3>Explore Courses</Heading.h3>
      </div>
      <Courses />
    </div>
  );
};

export default Explore;
