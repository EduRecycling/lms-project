import Course from "../../components/course_page/layout";
import Cord from "../../components/course_page/sub/cordinator";
import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import courses from "../../data/courses";

const Cordinator = () => {
  const { id, sn } = useParams();
  const coursep = courses.find((x) => x.id === id);

  if (!coursep) {
    return <NotFound />;
  }

  const modulep = coursep.modules.find((x) => x.sn === sn);

  if (!modulep) {
    return <NotFound />;
  }

  return (
    <Course>
      <Cord module={modulep} />
    </Course>
  );
};

export default Cordinator;
