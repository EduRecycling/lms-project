import { Rating } from "react-simple-star-rating";
import { Bend, Iconic } from "./style";

interface CommentType {
  id: string;
  rating: number;
  text: string;
  image: string;
  name: string;
}

const data = [
  {
    id: "1",
    rating: 5,
    text: `I recently had a question about what could be recycled
 and their courses was incredibly helpful and informative. 
Overall, I highly recommend Edurecyclying to anyone
 looking for a reliable and convenient educative 
recycling platform`,
    image: "/images/testimony/profile1.png",
    name: "Hannah Isaac",
  },
  {
    id: "2",
    rating: 5,
    text: `It’s nice using a platform and knowing you are getting
excellence deliveries and resources. I recommend 
edurecyclying for educators who are passionate about 
learning and growth.`,
    image: "/images/testimony/profile2.png",
    name: "James Isaac",
  },
  {
    id: "3",
    rating: 5,
    text: `Nothing makes me happy seeing that I dont have to stress
myself in getting recyclying lessons that comes with 
amazing benefits and certifications, I feel so good to be
a part of this.`,
    image: "/images/testimony/profile3.png",
    name: "Deborah Craig",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonials w-full p-[5%] flex flex-col justify-center">
      <div className="inner flex flex-col p-10 gap-3">
        <div className="heading text-center">
          <h3 className="h3 text-4xl font-semibold">Testimonials</h3>
        </div>
        <div className="w-full scroll-box pb-4">
          <Bend className="sub w-full flex gap-5 flex-wrap justify-center">
            {data.map((comment: CommentType) => {
              return <Testimony comment={comment} key={comment.id} />;
            })}
          </Bend>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Testimony = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="test-modal min-w-[300px] w-[calc(280px + 5vmin)] max-w-[400px] p-5 py-8 rounded-md flex flex-col items-center gap-2 bg-[#CBEBBF] shadow-md animate__animated animate__fadeInUp wow">
      <div className="ratings w-full flex justify-center">
        <Rating
          size={30}
          readonly
          initialValue={comment.rating}
          SVGstyle={{ display: "inline" }}
          fillColor="#082100"
        />
      </div>
      <div className="comment text-center">
        <p>{comment.text}</p>
      </div>
      <div className="persona flex items-center flex-col">
        <Iconic className="img-box bg-secondary-40 text-secondary-40 i90 circle overflow-hidden">
          <img
            src={comment.image}
            alt={comment.name}
            className="transition scale-110"
          />
        </Iconic>
        <span className="name text-md">{comment.name}</span>
      </div>
    </div>
  );
};
