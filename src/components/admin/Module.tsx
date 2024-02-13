import { Module, Test } from "../../../type";
import FileUI from "./FileUI";
import Editor from "../editor";
import Input from "./Input";
import Button from "./Button";
import TestForm from "./test";

type Moduleprop = {
  modules: Module[];
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
  tests: Test[];
  setTests: React.Dispatch<React.SetStateAction<Test[]>>;
};
export default function ModuleForm({
  modules,
  setModules,
  setTests,
  tests,
}: Moduleprop) {
  const handleEditorChange = (
    moduleIndex: number,
    field: keyof Module | "referenceText" | "referenceUrl",
    value: string | File
  ): void => {
    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              ...(field === "referenceText" || field === "referenceUrl"
                ? {
                    references: module.references?.map((ref, refIndex) =>
                      refIndex === module.references.length - 1
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
          : module
      )
    );
  };

  const addModule = (): void => {
    setModules((prevModules) => [
      ...prevModules,
      {
        title: "",
        description: "",
        image: null,
        type: "video",
        references: [{ text: "", url: "" }],
        file: null,
        article: "",
      },
    ]);
  };

  const addReference = (moduleIndex: number): void => {
    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              references: [...(module.references || []), { text: "", url: "" }],
            }
          : module
      )
    );
  };

  const removeModule = (index: number): void => {
    if (modules.length == 1) {
      console.log("one module left");
      alert("One module left");
    } else {
      setModules((prevModules) => prevModules.filter((_, i) => i !== index));
    }
  };

  const removeReference = (moduleIndex: number, refIndex: number): void => {
    setModules((prevModules) =>
      prevModules.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              references: module.references?.filter((_, i) => i !== refIndex),
            }
          : module
      )
    );
  };

  return (
    <div>
      <h4 className="text-xl pb-4 text-center font-bold">Modules</h4>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex}>
          <p className="text-xl font-semibold m-3">Module {moduleIndex + 1}</p>
          <Input
            placeholder="Enter The Module Title"
            name="title"
            value={module.title}
            title="Title"
            onchange={(e: any) =>
              handleEditorChange(moduleIndex, "title", e.target.value)
            }
          />
          <FileUI
            title="zModule Image"
            // ref={image}
            desc={"Upload Course Image"}
            onChange={(_: any) => {
              // console.log("image picked", courseInfo.image);
              // handleCourseInfoChange(e);
              // console.log("image selected", courseInfo.image);
            }}
            name={"image"}
            type="image/*"
            multiple
          />
          <Editor
            name="Description"
            moduleIndex={moduleIndex}
            handleEditorChange={handleEditorChange}
          />
          <p
            className="text-black font-[roboto] text-base mt-2 font-semibold mr-3"
            style={{ letterSpacing: "0.08px" }}
          >
            Type
          </p>
          <select
            className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
            value={module.type}
            onChange={(e) =>
              handleEditorChange(
                moduleIndex,
                "type",
                e.target.value as "video" | "article"
              )
            }
          >
            <option value="video">Video</option>
            <option value="article">Article</option>
          </select>
          {module.type === "video" ? (
            <FileUI
              desc="Upload Video File"
              onChange={(e: any) => {
                handleEditorChange(
                  moduleIndex,
                  "file",
                  e.target.files?.[0] || null
                );
                console.log(module.file);
              }}
              type="video/mp4,video/x-m4v,video/*"
              // ref={ModuleVideo}
            />
          ) : (
            <Editor
              name="article"
              moduleIndex={moduleIndex}
              handleEditorChange={handleEditorChange}
            />
          )}
          {module.file ? (
            <video
              width="320"
              height="240"
              controls
              src={URL.createObjectURL(module.file)}
            >
              {/* <source src="movie.mp4" type="video/*"> */}
              {/* <source src="movie.ogg" type="video/ogg"> */}
              Your browser does not support the video tag.
            </video>
          ) : (
            ""
          )}

          <div>
            <h5 className="text-black font-[roboto] text-xl mt-2 font-semibold m-3">
              References
            </h5>
            {module.references?.map((reference, refIndex) => (
              <div key={refIndex}>
                <p
                  className="text-black font-[roboto] text-xl text-center mt-2 font-semibold mr-3"
                  style={{ letterSpacing: "0.08px" }}
                >
                  Reference {refIndex + 1}
                </p>
                <Input
                  placeholder="Enter The Reference Text"
                  value={reference.text}
                  title="Reference Text"
                  onchange={(e: any) =>
                    handleEditorChange(
                      moduleIndex,
                      "referenceText",
                      e.target.value
                    )
                  }
                />
                <Input
                  placeholder="Enter The Reference URL"
                  value={reference.url || ""}
                  title="Reference URL"
                  onchange={(e: any) =>
                    handleEditorChange(
                      moduleIndex,
                      "referenceUrl",
                      e.target.value
                    )
                  }
                />

                <button
                  className=" p-4 bg-secondary-20 text-white text-base rounded-lg sml:text-xl my-4"
                  onClick={() => removeReference(moduleIndex, refIndex)}
                >
                  Remove Reference
                </button>
              </div>
            ))}
            <hr />
            <div className="flex justify-end">
              <button
                className=" p-4 bg-primary-20 text-white text-base rounded-lg sml:text-xl my-4"
                onClick={() => addReference(moduleIndex)}
              >
                Add Reference
              </button>
            </div>
          </div>

          <Button
            title="Remove Module"
            onclick={() => removeModule(moduleIndex)}
            color="bg-danger"
            center
          />
        </div>
      ))}
      <TestForm setTests={setTests} tests={tests} />

      <Button
        title="Add Module"
        onclick={() => addModule()}
        color="bg-primary-20"
        full
      />
    </div>
  );
}
