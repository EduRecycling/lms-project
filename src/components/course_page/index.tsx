import Footer from "../footer";
import Navbar from "../student_dashboard/navbar";
import Welcome from "./sub";
import Outline from "./sub/outline";

const CoursePage = () => {
  return (
    <div className="fill">
      <Navbar />
      <div className="main">
        <div className="sub inner pt-20 min-h-[100svh] flex flex-col gap-5">
          <Welcome />
          <Outline />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
