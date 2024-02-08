import BottomTab from "./BottomTab";
import TopTab from "./TopTab";
import Objective from "./tools/objective";

const Cordinator = () => {
  return (
    <div
      className="Cordinator h-full bg-primary-0 justify-stretch"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "90px 1fr 90px",
        minHeight: "calc(100svh - 90px)",
      }}
    >
      <div className="lint text-secondary-100 bg-primary-30">
        <TopTab />
      </div>
      <div className="inner min-h-full h-full flex flex-col max-w-[1020px] m-auto w-full min-w-[280px] overflow-x-scroll">
        <Objective />
      </div>
      <div className="lint text-secondary-100 bg-primary-30">
        <BottomTab />
      </div>
    </div>
  );
};

export default Cordinator;
