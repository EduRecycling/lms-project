import { Bend, Heading } from "./style";

const Partners = () => {
  return (
    <div className="Partners w-full m-auto bg-white p-10 max-w-[1280px] flex rounded">
      <Bend className="inner flex gap-5">
        <div className="heading">
          <Heading.h2 className="font-semibold w-full">
            In Partnership with:
          </Heading.h2>
        </div>
        <div className="sub">
          <div className="inner flex gap-5 flex-wrap">
            <Part />
            <Part />
            <Part />
            <Part />
            <Part />
          </div>
        </div>
      </Bend>
    </div>
  );
};

const Part = () => {
  return (
    <div className="part in max-w-[250px]">
      <img src="/images/partners/GDG.png" alt="" />
    </div>
  );
};

export default Partners;
