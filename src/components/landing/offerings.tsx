import { Heading } from "./style";

const Offering = () => {
  return (
    <div className="Offering flex flex-col items-center gap-2 p-10">
      <div className="inner">
        <Heading.h2 className="font-semibold">Our Offerings</Heading.h2>
      </div>
      <div className="sub flex justify-center w-ful items-center">
        <div className="inner-box flex flex-wrap gap-5 justify-center">
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="offer-modal min-w-[280px] w-[300px] bg-[#fff] rounded-lg p-4 flex flex-col gap-2">
      <div className="img-box w-full h-[200px] bg-gray-200 rounded"></div>
      <div className="description">
        <Heading.h5 className="title font-semibold">
          Kids Recycling's Projects
        </Heading.h5>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          soluta!
        </p>
      </div>
    </div>
  );
};

export default Offering;
