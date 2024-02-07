import { FaDownload } from "react-icons/fa6";
import Note from "../UI/Note";

const Notes = () => {
  return (
    <div className="notes-container flex flex-col gap-1">
      <div
        className="notes flex flex-wrap gap-4 p-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {data.map((note) => {
          return <Note />;
        })}
        {data.length < 1 && (
          <div className="more flex flex-col items-center justify-center gap-2 mt-4 ta-c">
            <div className="circle w-[240px] h-[240px] bg-secondary-10 text-[#fff] text-[6rem] grid place-content-center place-items-center rounded-full">
              <FaDownload />
            </div>
            <p className="text-center">
              You are not enrolled in any course at the moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;

const data = [
  {
    id: "1",
    title: "Community Development Projects",
    description: `Community Development Projects 
Get featured in community development portfolios for a better
greener economy`,
    image: "/images/offerings/community.png",
  },
  {
    id: "2",
    title: "Kids Recycling's Projects",
    description: `Get your kids recycling's projects featured in our portfolio for a better 
and greener economy`,
    image: "/images/offerings/kids.png",
  },
  {
    id: "3",
    title: "Recyclying Hackathon Projects",
    description: `Introducing a platform for recyclying hackathon for a better
green economy`,
    image: "/images/offerings/hackathon.png",
  },
];
