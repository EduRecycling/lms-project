import parse from "html-react-parser";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const View = ({ ele }: { ele: string; id: string | number }) => {
  const Element = parse(ele);
  return (
    <div className="d m-auto flex flex-col gap-2 p-4 md:p-6 font-roboto">
      {/* <div className="tip ">{id}</div> */}
      <div className="view rounded-md m-auto min-w-full min-h-[300px] p-4">
        {Element}
      </div>
    </div>
  );
};

export default View;
