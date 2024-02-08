import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";

const BottomTab = () => {
  return (
    <div className="bottom-tab justify-between p-5 px-10 w-full flex items-center gap-3">
      <div className="opt1">
        <button className="exit-btn flex gap-1 items-center text-lg">
          <BsChatDots />
          <span>Feedback</span>
        </button>
      </div>
      <div className="opt2 flex items-center gap-5">
        <div className="controls flex items-center gap-3">
          <button className="prev-btn flex gap-1 p-3 px-6 items-center bg-primary-100 text-secondary-10 font-semibold text-md rounded-md">
            <span className="icon text-xl">
              <BiChevronLeft />
            </span>
            <span>Previous</span>
          </button>
          <button className="next-btn flex gap-1 p-3 px-6 items-center bg-primary-100 text-secondary-10 font-semibold text-md rounded-md">
            <span>Next</span>
            <span className="icon text-xl">
              <BiChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
