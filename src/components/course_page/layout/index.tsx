import { ReactElement } from "react";
import Navbar from "../../navbar/auth";

const Course = ({ children }: { children: ReactElement }) => {
  return (
    <div className="fill">
      <Navbar />
      <div className="main">
        <div className="sub inner min-h-[100svh] flex flex-col gap-5">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Course;
