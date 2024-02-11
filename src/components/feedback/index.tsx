import { useState } from "react";
import Editor from "../editor";
import Footer from "../footer";
import { Rating } from "react-simple-star-rating";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(3);

  const handleEditorChange = (content: string) => {
    setFeedback(content);
  };
  const sendFeedback = () => {
    console.log(feedback);
  };
  return (
    <section className="bg-white">
      <img
        src="images/feedback.png"
        alt="banner pics"
        className="w-full h-[20vh] object-fill"
      />
      <div className="m-[5%] pb-4" style={{ borderBottom: "1px solid #000" }}>
        <p className="text-base lg:text-xl font-bold font-[roboto]">Rating</p>
        <p className="text-xs lg:text-sm  font-[roboto]">
          Let’s us know what you think
        </p>
      </div>
      <div className="px-[5%] lg:px-[20%] ">
        <p className="text-base lg:text-xl font-medium font-[roboto] text-center">
          Send Us Feedback
        </p>
        <p className="py-2 text-xs  font-[roboto] text-center">
          Do you have a suggestion or found some bug?
        </p>
        <p className=" text-xs  font-[roboto] text-center">
          Please let us know in the field below
        </p>
        <p className="pt-6 text-base lg:text-xl font-bold font-[roboto]">
          How was your experience ?
        </p>
        <div className="ratings w-full flex justify-start my:2 lg:my-4">
          <Rating
            onClick={(rate) => setRating(rate)}
            size={30}
            initialValue={rating}
            SVGstyle={{ display: "inline" }}
            fillColor="#082100"
          />
        </div>
        <p className="p-3 text-base lg:text-xl font-bold font-[roboto]">
          Share Your Feedback
        </p>
        <Editor handleEditorChange={handleEditorChange} feedback />
        <div className="flex my-6">
          <button
            className=" p-2 lg:p-4 bg-primary-30 w-full text-white text-base rounded-lg sml:text-xl my-4"
            onClick={() => sendFeedback()}
          >
            Send A Feedback
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
