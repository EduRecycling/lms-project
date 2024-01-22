import { Rating } from "react-simple-star-rating";
import { Bend, Iconic } from "./style";

const Testimonial = () => {
  return (
    <div className="testimonials w-full p-12 flex flex-col justify-center">
      <div className="inner flex flex-col p-12 gap-3">
        <div className="heading text-center">
          <h3 className="h3 text-4xl font-semibold">Testimonials</h3>
        </div>
        <div className="w-full scroll-box pb-4">
          <Bend className="sub w-full flex gap-5 flex-wrap justify-center">
            <Testimony />
            <Testimony />
            <Testimony />
          </Bend>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Testimony = () => {
  return (
    <div className="test-modal min-w-[300px] w-[calc(280px + 5vmin)] max-w-[400px] p-5 py-8 rounded-md flex flex-col items-center gap-2 bg-[#CBEBBF]">
      <div className="ratings w-full flex justify-center">
        <Rating
          size={30}
          readonly
          initialValue={4}
          SVGstyle={{ display: "inline" }}
          fillColor="#082100"
        />
      </div>
      <div className="comment text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          id fugiat velit consequuntur voluptate cupiditate perferendis ut sunt
          quae veniam?
        </p>
      </div>
      <div className="persona flex items-center flex-col">
        <Iconic className="img-box bg-black i90 circle adjust-size overflow-hidden">
          <img
            src="/images/testimony/profile1.png"
            alt="kid recycling"
            className="transition scale-110"
          />
        </Iconic>
        <span className="name text-md">John Jonnes</span>
      </div>
    </div>
  );
};
