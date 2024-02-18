// import { Heading } from "../../landing/style";
import Certified from "./certified";

const Certificate = () => {
  return (
    <div className="certificate w-full min-w-full overflow-scroll min-h-svh p-6 flex flex-col">
      <div className="top">
        <div className="toolbar no-print flex gap-2">
          <button
            className="bg-primary-20 text-secondary-100 p-2 px-3 rounded-sm btn btn-info"
            onClick={() => window.print()}
          >
            Print Certificate
          </button>
          <button
            className="bg-primary-20 text-secondary-100 p-2 px-3 rounded-sm btn btn-info"
            id="downloadPDF"
          >
            Download PDF
          </button>
        </div>
      </div>
      <Certified />
    </div>
  );
};

export default Certificate;
