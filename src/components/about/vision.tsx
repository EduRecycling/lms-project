import { Bend } from "../landing/style";

interface visionType {
  id: string;
  title: string;
  info: string[];
}

const data = [
  {
    id: "1",
    title: "Our Mission",
    info: [
      "To educate citizens on how to employ effective waste management practices, understanding the consequences of improper waste handling, and how to transform waste into valuable resources through recycling ",
    ],
  },
  {
    id: "2",
    title: "Our Vision",
    info: [
      "Our objective is to build a future, characterized by an eco-friendly environment through the efficient use of resources, fostering a more sustainable way of living.",
    ],
  },
  {
    id: "3",
    title: "Our Core Values",
    info: [
      "Customer Focus: Providing excellent customer service, convenient recycling programs, and accessible information.",
      "Safety: prioritizing the safety of employees, partners, and the public throughout the recycling process.",
      "Innovation: Embracing new technologies and solutions to push the boundaries of recycling and resource recovery.",
    ],
  },
];

const Visions = () => {
  return (
    <div className="testimonials w-full p-[5%] flex flex-col justify-center">
      <div className="inner flex flex-col p-10 gap-3">
        <div className="w-full scroll-box pb-4">
          <Bend className="sub w-full flex gap-5 flex-wrap justify-center">
            {data.map((vision: visionType) => {
              return <Vision vision={vision} key={vision.id} />;
            })}
          </Bend>
        </div>
      </div>
    </div>
  );
};

export default Visions;

const Vision = ({ vision }: { vision: visionType }) => {
  return (
    <div className="test-modal min-w-[300px] w-[calc(280px + 5vmin)] max-w-[400px] p-5 py-8 rounded-md flex-[0.3] flex-col  gap-2 bg-neutral-colour-96 shadow-md animate__animated animate__fadeInUp wow border border-solid border-primary-90">
      <p className="text-primary text-[roboto] text-2xl font-semibold">
        {vision.title}
      </p>
      <ul
        style={{ listStyleType: `${vision.info.length > 1 ? "disc" : "none"}` }}
        className="px-3"
      >
        {vision.info.map((data, index) => {
          return (
            <li
              className=" text-Primary_10 text-[roboto] text-sm my-3"
              key={index}
            >
              {data}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
