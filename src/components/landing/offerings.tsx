import { Heading } from "./style";

interface OfferType {
  id: string;
  title: string;
  description: string;
  image: string;
}

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

const Offering = () => {
  return (
    <div className="Offering flex flex-col items-center gap-1 p-[5%]">
      <div className="inner">
        <Heading.h2 className="font-semibold">Our Offerings</Heading.h2>
      </div>
      <div className="sub flex justify-center w-ful items-center">
        <div className="inner-box flex flex-wrap gap-5 justify-center">
          {data.map((offer: OfferType) => {
            return <Offer offer={offer} key={offer.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Offer = ({ offer }: { offer: OfferType }) => {
  return (
    <div className="offer-modal min-w-[280px] w-[360px] bg-[#fff] rounded-lg p-4 flex flex-col gap-2 shadow-lg animate__animated animate__fadeInUp wow">
      <div className="img-box w-full h-[200px] min-h-[220px] bg-[#ddd] rounded overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="description">
        <Heading.h4 className="title font-semibold">{offer.title}</Heading.h4>
        <p className="description">{offer.description}</p>
      </div>
    </div>
  );
};

export default Offering;
