import Certy from "../../components/student_dashboard/certificate";
import { useParams } from "react-router-dom";
import NotFound from "../notFound";
import courses from "../../data/courses";

const Certificate = () => {
  const { id } = useParams();
  const coursep = courses.find((x) => x.id === id);

  if (!coursep) {
    return <NotFound />;
  }

  return <Certy />;
};

export default Certificate;
