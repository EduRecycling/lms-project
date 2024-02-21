import Course from "../../components/course_page/layout";
import { Outline } from "../../components/course_page/sub";
import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import courses from "../../data/courses";
import Footer from "../../components/footer";

const CourseOutline = () => {
  const { id } = useParams();
  const coursep = courses.find((x) => x.id === id);

  if (!coursep) {
    return <NotFound />;
  }

  return (
    <Course>
      <>
        <Outline course={coursep} />
        <Footer />
      </>
    </Course>
  );
};

export default CourseOutline;
