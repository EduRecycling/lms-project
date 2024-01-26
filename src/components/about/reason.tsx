import { Bend } from "../landing/style";

const Reason = () => {
  return (
    <div className="Reason w-full p-[5.5%]">
      <div className="joint flex gap-3 flex-col max-w-[1200px] m-auto">
        <Bend className="inner flex justify-center gap-5 items-center m-0 p-0 m840 flex-row-reverse">
          <div
            className={`why bg-primary-50 text-[#fff] animate__animated animate__slideInLeft wow rounded-3xl p-10 text-lg basis-[55%] m-0 max-h-[320px] max-w-[540px] relative full
            `}
          >
            <p>
              We are a team of tech enthusiasts, eager to solve problems within
              and beyond our environment using our technical skills.
            </p>
            <br />
            <p>
              That is why we are taking on the GDSC Solution Challenge to apply
              our problem-solving skills towards achieving some of the United
              Nations Sustainable Development Goals (SDGs) and contribute to
              building a more sustainable and inclusive future.
            </p>
            <br />
          </div>
          <div className="evidence img-box basis-[55%] max-w-[540px] animate__animated animate__slideInRight wow">
            <img src="/images/about-reason.png" alt="..." />
          </div>
        </Bend>
      </div>
    </div>
  );
};

export default Reason;
