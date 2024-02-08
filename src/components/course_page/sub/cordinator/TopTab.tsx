import { BiArrowBack } from "react-icons/bi";

const TopTab = () => {
  return (
    <div className="top-tab p-4 px-10 flex justify-between items-center gap-5">
      <div className="svg">
        <button className="exit-btn flex gap-1 items-center text-lg">
          <BiArrowBack />
          <span>Exit</span>
        </button>
      </div>
      <div className="info flex flex-col gap">
        <span className="title">Introduction to Negotiation</span>
        <span className="lesson">Lesson 1 of 4</span>
      </div>
    </div>
  );
};

export default TopTab;
