import { FaChevronDown } from "react-icons/fa6";
import { Bend, Heading, Shorthen } from "./style";
import { useState } from "react";

const Reason = () => {
  const [more, setMore] = useState(false);
  return (
    <div className="Reason w-full p-[5.5%]">
      <div className="joint flex gap-3 flex-col max-w-[1200px] m-auto">
        <Heading.h2 className="font-semibold text-center">
          Why Edurecycling?
        </Heading.h2>
        <Bend className="inner flex justify-center gap-5 items-center m-0 p-0 m840">
          <Shorthen
            className={`why bg-primary-50 text-[#fff] animate__animated animate__slideInLeft wow rounded-3xl p-10 text-lg basis-[55%] m-0 max-h-[320px] max-w-[540px] relative ${
              more && "full"
            }`}
            onClick={() => {
              setMore(!more);
            }}
          >
            <p>
              Upon investigation, it was found that one of the reasons why waste
              mismanagement is prevalent may be due to a lack of awareness.
            </p>
            <br />
            <p>
              Many people may not be fully conscious of the environmental impact
              of improper waste disposal or may not have access to information
              about proper waste management practices.
            </p>
            <br />
            <p>
              This realization has motivated us to take it upon ourselves to
              educate people on how waste can be recycled and reconverted into
              treasure.
            </p>
            {!more && (
              <button
                className="more absolute bottom-[10px] bg-secondary-30 p-4 rounded-full left-[50%] translate-x-[-50%]"
                onClick={() => {
                  setMore(!more);
                }}
              >
                <FaChevronDown />
              </button>
            )}
          </Shorthen>
          <div className="evidence img-box basis-[55%] max-w-[540px] animate__animated animate__slideInRight wow">
            <img src="/images/reason.png" alt="..." />
          </div>
        </Bend>
      </div>
    </div>
  );
};

export default Reason;
