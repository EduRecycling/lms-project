import { Reference } from "../../../type";
import Input from "./Input";

type prop = { references: Reference[]; setReferences: any };

export default function References({ references, setReferences }: prop) {
  const addReference = (): void => {
    setReferences((prevModules: Reference[]) => [
      ...prevModules,
      { text: "", url: "" },
    ]);
  };
  const removeReference = (index: number): void => {
    setReferences((prevModules: Reference[]) =>
      prevModules.filter((_, i) => i !== index)
    );
  };
  const handleChange = (e: any) => {
    setReferences((prevReference: Reference[]) => {
      const name = e.target.name;
      const value = e.target.value;

      return { ...prevReference, [name]: value };
    });
  };

  return (
    <div>
      <h5 className="text-black font-[roboto] text-xl mt-2 font-semibold m-3">
        References
      </h5>
      {references?.map((reference, refIndex) => (
        <div key={refIndex}>
          <p
            className="text-black font-[roboto] text-xl text-center mt-2 font-semibold mr-3"
            style={{ letterSpacing: "0.08px" }}
          >
            Reference {refIndex + 1}
          </p>
          <Input
            onchange={(e: any) => handleChange(e)}
            placeholder="Enter The Reference Text"
            value={reference.text}
            title="Reference Text"
          />
          <Input
            onchange={(e: any) => handleChange(e)}
            placeholder="Enter The Reference URL"
            value={reference.url || ""}
            title="Reference URL"
          />

          <button
            className=" p-4 bg-secondary-20 text-white text-base rounded-lg sml:text-xl my-4"
            onClick={() => removeReference(refIndex)}
          >
            Remove Reference
          </button>
        </div>
      ))}
      <hr />
      <div className="flex justify-end">
        <button
          className=" p-4 bg-primary-20 text-white text-base rounded-lg sml:text-xl my-4"
          onClick={() => addReference()}
        >
          Add Reference
        </button>
      </div>
    </div>
  );
}
