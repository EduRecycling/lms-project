import { Heading } from "../../landing/style";

const Welcome = () => {
  const theme = "light";

  return (
    <div className="welcome flex gap-4 flex-col">
      <div
        className="call pb-2"
        style={{
          borderBottom: `2px solid ${theme !== "dark" ? "#252323" : "#332e2e"}`,
        }}
      >
        <Heading.h2>Welcome Back Oluwatomi</Heading.h2>
        <p>Learn on the go from the best learning resource</p>
      </div>
      <div className="stat">
        <div className="diagram flex gap-5 items-center">
          <div className="circle w-[150px] h-[150px] bg-primary rounded-full"></div>
          <div className="values">
            <ul className="flex flex-col gap-1">
              <li>
                <div className="flex items-center gap-1">
                  <span>
                    <div className="dot w-5 h-5 bg-Primary_30 rounded-full"></div>
                  </span>
                  <span>Completed</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <span>
                    <div className="dot w-5 h-5 bg-primary rounded-full"></div>
                  </span>
                  <span>Pending</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <span>
                    <div className="dot w-5 h-5 bg-primary-90 rounded-full"></div>
                  </span>
                  <span>Ongoing</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
