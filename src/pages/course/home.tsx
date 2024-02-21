import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import courses from "../../data/courses";
import Course from "../../components/course_page/layout";
import { Welcome } from "../../components/course_page/sub";
import Footer from "../../components/footer";

const CourseHome = () => {
  const { id } = useParams();
  const coursep = courses.find((x) => x.id === id);

  if (!coursep) {
    return <NotFound />;
  }

  return (
    <Course>
      <>
        <Welcome course={coursep} />
        <Footer />
      </>
    </Course>
  );
};

export default CourseHome;
