import { useState } from "react";
import { LessonType, ModuleType } from "../../../../../type";
import BottomTab from "./BottomTab";
import TopTab from "./TopTab";
import { AudioPlayer, Objective, Quiz, VideoPlayer, View } from "./tools";

const Cordinator = ({ module }: { module: ModuleType }) => {
  const Vies = (obj: LessonType) => {
    switch (obj.type) {
      case "article":
        return <View ele={obj.markup} id={obj.id} key={obj.id} />;
      case "video":
        return <VideoPlayer />;
      case "quiz":
        return <Quiz />;
      case "audio":
        return <AudioPlayer />;

      default:
        return <View ele={obj.markup} id={obj.id} key={obj.id} />;
    }
  };

  const [slide, setSlide] = useState<number>(0);
  const maxL = module.lessons.length;

  console.log(slide);

  return (
    <div
      className="Cordinator h-full bg-primary-0 justify-stretch"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "90px 1fr 90px",
        minHeight: "calc(100svh)",
      }}
    >
      <div className="lint text-secondary-100 bg-primary-30">
        <TopTab />
      </div>
      <div className="inner min-h-full h-full flex flex-col max-w-[1020px] m-auto w-full min-w-[280px] overflow-x-auto">
        {slide === 0 && <Objective lessons={module.lessons} />}
        {module.lessons.map((obj) => {
          return String(slide) === String(obj.id) ? Vies(obj) : "";
        })}
      </div>
      <div className="lint text-secondary-100 bg-primary-30">
        <BottomTab slide={slide} setSlide={setSlide} maxL={maxL} />
      </div>
    </div>
  );
};

export default Cordinator;
