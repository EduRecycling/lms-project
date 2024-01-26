import { FaChevronDown } from "react-icons/fa6";
import { Bend, Heading, Shorthen } from "../landing/style";
import { useState } from "react";

const OurStory = () => {
  const [more, setMore] = useState(false);
  return (
    <div className="Reason w-full p-[5.5%]">
      <div className="joint flex gap-3 flex-col max-w-[1200px] m-auto">
        <Bend className="inner flex justify-center gap-5 items-center m-0 p-0 m840">
          <Shorthen
            className={`why text-Primary_10 animate__animated animate__slideInLeft wow rounded-3xl p-10 text-lg basis-[55%] m-0 max-h-[320px] max-w-[540px] relative ${
              more && "full"
            }`}
            onClick={() => {
              setMore(!more);
            }}
          >
            <Heading.h3 className="font-bold text-3xl text-Neutral-colour py-4">
              Our Story
            </Heading.h3>
            <p>
              Maintaining sustainable cities and communities is not rocket
              science; it simply requires adopting eco-friendly habits and
              promoting a culture of environmental responsibility to make the
              world a better place to live in.
            </p>
            <br />
            <p>
              Effective waste management is one of the ways we can maintain a
              sustainable environment because waste mismanagement can pose a
              threat to our health, natural resources, and economy.
            </p>
            <br />
            <p>
              After conducting thorough research on how effective waste
              management can be enhanced, our team decided to coin the term
              'Edurecycling
            </p>
            {!more && (
              <button
                className="more absolute bottom-[10px] bg-neutral-colour-96 p-4 rounded-full left-[50%] translate-x-[-50%]"
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

export default OurStory;
