import { Bend } from "./style";

const Banner = () => {
  return (
    <div className="Banner h-full w-full text-white bg-[#082100] flex justify-center px-10">
      <Bend className="inner reverse flex gap-2 items-center justify-center w-[1280px]">
        <div className="info flex gap-2 flex-col w-full">
          <h1 className="main-heading text-4xl font-bold">
            Educating a Future, Characterized by an Eco-Friendly Environment
          </h1>
          <p className="sub-text">
            Effective waste management is one of the ways we can maintain a
            sustainable environment
          </p>
          <button className="get-started bg-[#CBEBBF] text-[#082100] p-[2em] py-3 font-semibold w-fit rounded-[4px]">
            Get Started Now!
          </button>
        </div>
        <div className="diagram w-[90%]">
          <img src="/images/banner-img.png" alt="..." className="w-full" />
        </div>
      </Bend>
    </div>
  );
};

export default Banner;
