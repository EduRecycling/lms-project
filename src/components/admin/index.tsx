import { useState } from "react";
import ModuleForm from "./Module";
import { Reference, type Module, Test } from "../../../type";
import TestForm from "./test";
import References from "./References";
import CourseInfo from "./CourseInfo";

export default function Admin() {
  const [references, setReferences] = useState<Reference[]>([
    { text: "", url: "" },
  ]);

  const [modules, setModules] = useState<Module[]>([
    {
      title: "",
      description: "",
      type: "video",
      references: [{ text: "", url: "" }],
      file: null,
    },
  ]);
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [tests, setTests] = useState<Test[]>([
    {
      question: "",
      options: [" ", " ", " ", " "],
      correctAnswer: "",
    },
  ]);

  return (
    <div className="px-[20%]">
      <CourseInfo courseInfo={courseInfo} setCourseInfo={setCourseInfo} />
      <ModuleForm modules={modules} setModules={setModules} />
      <TestForm tests={tests} setTests={setTests} />
      <References references={references} setReferences={setReferences} />
      <div className="flex ">
        <button
          className=" p-4 bg-primary-50 w-full text-white text-base rounded-lg sml:text-xl my-4"
          onClick={() => {}}
        >
          Publish Course
        </button>
      </div>
    </div>
  );
}
