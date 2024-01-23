import googleDev from "../../assets/googleDev.png";
import sdg from "../../assets/sdg.png";

export default function Partner() {
  return (
    <div
      className={`p-[5%] w-full bg-white flex justify-evenly flex-wrap items-center`}
    >
      <p className=" text-4xl font-[roboto] text-Primary_10">
        In Partnership <br /> with;
      </p>
      <div className="flex gap-2 flex-wrap">
        <img src={googleDev} alt="google Developer" />
        <img src={sdg} alt="Sustainable development goals" />
      </div>
    </div>
  );
}
