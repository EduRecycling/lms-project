import React, { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

type prop = {
  // ref: React.MutableRefObject<any>;
  onChange: any;
  desc: string;
  type: string;
  name?: string;
  title?: string;
  multiple?: boolean;
};

function FileUI({ onChange, desc, type, name, title, multiple }: prop) {
  const ref: React.MutableRefObject<any> = useRef();
  return (
    <>
      <p
        className="text-black font-[roboto] text-base my-2 font-semibold mr-3"
        style={{ letterSpacing: "0.08px" }}
      >
        {title}
      </p>
      <div
        className="cursor-pointer mx-[20%]  border-dashed  border-[3px]  border-[#B9B9B9B2] my-7 flex flex-col items-center justify-center"
        onClick={() => ref.current.click()}
      >
        <FaCloudUploadAlt className="text-8xl sml:text-4xl text-[#B9B9B9B2]" />
        <p className="font-primary font-bold  text-base text-[#B9B9B9B2] ">
          {desc}
        </p>
        <input
          type="file"
          className="hidden"
          accept={type}
          ref={ref}
          onChange={(e) => onChange(e)}
          name={name ? name : ""}
          multiple={multiple}
        />
      </div>
    </>
  );
}

export default FileUI;
