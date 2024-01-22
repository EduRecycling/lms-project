import { Bend, Heading } from "./style";

const Reason = () => {
  return (
    <div className="Reason w-full p-10">
      <div className="joint flex gap-3 flex-col max-w-[1200px] m-auto">
        <Heading.h2 className="font-semibold">Why Edurecycling?</Heading.h2>
        <Bend className="inner flex justify-center gap-5 items-center m-0 p-0">
          <div className="why bg-[#65BF51] text-[#fff] rounded-3xl p-6 text-lg basis-[55%] m-0 ">
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
          </div>
          <div className="evidence img-box basis-[55%]">
            <img src="/images/reason.png" alt="..." />
          </div>
        </Bend>
      </div>
    </div>
  );
};

export default Reason;
