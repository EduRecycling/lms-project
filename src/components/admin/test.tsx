import React from "react";
import { Test } from "../../../type";
import Input from "./Input";

interface TestFormProps {
  tests: Test[];
  setTests: React.Dispatch<React.SetStateAction<Test[]>>;
}

const TestForm: React.FC<TestFormProps> = ({ tests, setTests }) => {
  const handleAddTest = () => {
    setTests((prevTests) => [
      ...prevTests,
      {
        question: "",
        options: [" ", " ", " ", " "],
        correctAnswer: "",
      },
    ]);
  };

  const handleRemoveTest = (index: number) => {
    setTests((prevTests) => prevTests.filter((_, i) => i !== index));
  };

  const handleChange = (
    index: number,
    field: keyof Test | "option" | "referenceText" | "referenceUrl",
    value: string | string[] | File
  ) => {
    setTests((prevTests) =>
      prevTests.map((test, i) =>
        i === index
          ? {
              ...test,
              ...(field === "option"
                ? { options: value as string[] }
                : field === "referenceText" || field === "referenceUrl"
                ? {
                    references: test.references?.map((ref, refIndex) =>
                      refIndex === test.references!.length - 1
                        ? {
                            ...ref,
                            [field === "referenceText" ? "text" : "url"]:
                              value as string,
                          }
                        : ref
                    ),
                  }
                : { [field]: value }),
            }
          : test
      )
    );
  };

  return (
    <div>
      <h4 className="text-xl p-4 text-center font-bold mt-4">Tests</h4>

      {tests.map((test, index) => (
        <div key={index}>
          <Input
            title="Question :"
            name="title"
            value={test.question}
            onchange={(e: any) =>
              handleChange(index, "question", e.target.value)
            }
            placeholder="Enter The Course Title"
          />

          {test.options.map((option, optionIndex) => (
            <Input
              name={`Option ${optionIndex + 1}`}
              value={option}
              onchange={(e: any) =>
                handleChange(index, "option", [
                  ...test.options.slice(0, optionIndex),
                  e.target.value,
                  ...test.options.slice(optionIndex + 1),
                ])
              }
              key={optionIndex}
              placeholder={`Enter Option ${optionIndex + 1}`}
              title={`Option ${optionIndex + 1}`}
            />
          ))}
          <Input
            title="Correct Answer"
            name="correctAns"
            value={test.correctAnswer}
            onchange={(e: any) =>
              handleChange(index, "correctAnswer", e.target.value)
            }
            placeholder="Enter The Course Title"
          />

          <div className="flex justify-center">
            <button
              className=" p-4 bg-danger w-1/2 text-white text-base rounded-lg sml:text-xl my-4"
              onClick={() => handleRemoveTest(index)}
            >
              Remove Test
            </button>
          </div>
        </div>
      ))}
      <button
        className=" p-4 bg-primary-80 w-full text-white text-base rounded-lg sml:text-xl my-4"
        onClick={handleAddTest}
      >
        Add Test
      </button>
    </div>
  );
};

export default TestForm;
