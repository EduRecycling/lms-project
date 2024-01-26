import { Bend, Heading } from "../landing/style";

const Banner: React.FC = () => {
  return (
    <div className="Banner h-full w-full min-h-[200px] text-white  flex justify-center px-10 overflow-hidden">
      <Bend className="inner reverse flex gap-8 items-center justify-center w-[1280px] pt-10">
        <div className="info flex gap-2 flex-col w-full wow animate__animated animate__fadeInDown">
          <Heading.h1 className="main-heading text-4xl font-bold text-Primary_10">
            A Team of Climate Solution Enthusiasts Using Technology
          </Heading.h1>
          <p className="sub-text text-primary-20">
            We are a team of tech enthusiasts, eager to solve problems within
            and beyond our environment using our technical skills
          </p>
          <button className="get-started bg-primary-20 hover:bg-primary-80 text-primary-90 p-[2em] py-3 font-semibold w-fit rounded-[4px]">
            Get Started Now!
          </button>
        </div>
        <div className="diagram w-[90%] overflow-hidden animate__animated animate__slideInRight animate__delay wow">
          <img src="/images/about-banner.png" alt="..." className="w-full" />
        </div>
      </Bend>
    </div>
  );
};

export default Banner;
