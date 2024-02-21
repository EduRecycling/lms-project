import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";

const BottomTab = ({
  slide,
  maxL,
  setSlide,
}: {
  slide: number;
  maxL: number;
  setSlide: (value: number) => void;
}) => {
  return (
    <div className="bottom-tab justify-between p-5 px-10 w-full flex items-center gap-3">
      <div className="opt1">
        <a
          href="https://bit.ly/edurecycling"
          target="_blank"
          rel="no-referrer"
          className="exit-btn flex gap-1 items-center text-lg"
        >
          <BsChatDots />
          <span>Feedback</span>
        </a>
      </div>
      <div className="opt2 flex items-center gap-5">
        <div className="controls flex items-center gap-3">
          <button
            onClick={() => {
              if (slide > 0) setSlide(slide - 1);
            }}
            className={`prev-btn flex gap-1 p-3 px-6 items-center bg-primary-100 text-secondary-10 font-semibold text-md rounded-md ${
              slide > 0 ? "bg-primary-100" : "bg-secondary-70"
            }`}
          >
            <span className="icon text-xl">
              <BiChevronLeft />
            </span>
            <span>Previous</span>
          </button>
          <button
            onClick={() => {
              if (slide < maxL) setSlide(slide + 1);
            }}
            className={`next-btn flex gap-1 p-3 px-6 items-center bg-primary-100 text-secondary-10 font-semibold text-md rounded-md ${
              slide < maxL ? "bg-primary-100" : "bg-secondary-70"
            }`}
          >
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
