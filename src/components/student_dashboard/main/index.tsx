import Welcome from "./welcome";
import Courses from "./courses";

const Main = () => {
  return (
    <div className="main p-28 px-10 flex flex-col gap-3 min-h-[100svh]">
      <Welcome />
      <Courses />
    </div>
  );
};

export default Main;
