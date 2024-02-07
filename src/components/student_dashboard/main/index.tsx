import Courses from "./courses";
import Welcome from "./welcome";

const Main = () => {
  return (
    <div className="main p-1 flex flex-col gap-3">
      <Welcome />
      <Courses />
    </div>
  );
};

export default Main;
