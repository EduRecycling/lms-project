import { useState } from "react";
import ModuleForm from "./Module";
import { Reference, type Module, Test } from "../../../type";
import TestForm from "./test";
import References from "./References";
import CourseInfo from "./CourseInfo";
import Button from "./Button";

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
  const handlePublish = () => {
    const courses=[]
  }

  return (
    <div className="px-[5%] lg:px-[20%]">
      <CourseInfo courseInfo={courseInfo} setCourseInfo={setCourseInfo} />
      <ModuleForm modules={modules} setModules={setModules} />
      <TestForm tests={tests} setTests={setTests} />
      <References references={references} setReferences={setReferences} />

      <Button
        title="Publish Course"
        onclick={() => {}}
        full
        color="bg-primary-50"
      />
    </div>
  );
}
