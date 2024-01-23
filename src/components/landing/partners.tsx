import { Bend, Heading } from "./style";

interface PartnerType {
  id: string;
  name: string;
  logo: string;
}

const data = [
  {
    id: "1",
    name: "Google Developers",
    logo: "/images/partners/GDG.png",
  },
  {
    id: "2",
    name: "Substainable Development Goals",
    logo: "/images/partners/SDG.png",
  },
];

const Partners = () => {
  return (
    <div className="Partners w-full m-auto bg-white p-10 max-w-[1280px] flex rounded mb-24">
      <Bend className="inner flex gap-5 justify-center">
        <div className="heading">
          <Heading.h3 className="font-semibold w-full">
            In Partnership with:
          </Heading.h3>
        </div>
        <div className="sub w-fit">
          <div className="inner flex gap-5 flex-wrap">
            {data.map((partner) => {
              return <Part partner={partner} key={partner.id} />;
            })}
          </div>
        </div>
      </Bend>
    </div>
  );
};

const Part = ({ partner }: { partner: PartnerType }) => {
  return (
    <div
      className="part in max-w-80 m-auto animate__animated animate__zoomIn wow"
      title={partner.name}
    >
      <img src={partner.logo} alt={partner.name} />
    </div>
  );
};

export default Partners;
