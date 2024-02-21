import { useNavigate } from "react-router-dom";
import { Bend, Heading } from "./style";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="Banner h-full w-full min-h-[200px] text-white bg-[#082100] flex justify-center px-10 overflow-hidden pt-20 md:pt-10">
      <Bend className="inner reverse flex gap-8 items-center justify-center w-[1280px] pt-10">
        <div className="info flex gap-2 flex-col w-full wow animate__animated animate__fadeInDown">
          <Heading.h1 className="main-heading text-4xl font-bold">
            Educating a Future, Characterized by an Eco-Friendly Environment
          </Heading.h1>
          <p className="sub-text">
            Effective waste management is one of the ways we can maintain a
            sustainable environment
          </p>
          <button
            className="get-started bg-primary-90 hover:bg-primary-80 text-[#082100] p-[2em] py-3 font-semibold w-fit rounded-[4px]"
            onClick={() => {
              navigate("outline");
            }}
          >
            Get Started Now!
          </button>
        </div>
        <div className="diagram w-[90%] overflow-hidden animate__animated animate__slideInRight animate__delay wow">
          <img src="/images/banner-img.png" alt="..." className="w-full" />
        </div>
      </Bend>
    </div>
  );
};

export default Banner;
