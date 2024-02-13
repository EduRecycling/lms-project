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
      image: null,
      type: "video",
      references: [{ text: "", url: "" }],
      file: null,
      tests: [
        {
          question: "",
          options: [" ", " ", " ", " "],
          correctAnswer: "",
        },
      ],
      article: "",
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
    <div className="px-[5%] lg:px-[20%]">
      <CourseInfo courseInfo={courseInfo} setCourseInfo={setCourseInfo} />
      <ModuleForm
        modules={modules}
        setModules={setModules}
        tests={tests}
        setTests={setTests}
      />

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
