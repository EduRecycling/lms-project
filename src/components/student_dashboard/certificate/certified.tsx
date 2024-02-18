const Certified = () => {
  return (
    <div
      className="frame flex flex-col p-10 max-w-[1020px] max-h-[720px] min-w-[1020px] w-full h-full m-auto"
      style={{
        backgroundImage: "url('/images/cert.jpg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="certified w-full h-full min-w-full min-h-full max-w-full max-h-full flex flex-col shadow-mdd rounded-sm p-8 box-border overflow-hidden">
        <div className="inner rounded-md special-font-1 text-center flex flex-col gap-8 w-full min-w-full p-4 py-6">
          <div className="top flex flex-col gap-2">
            <div className="ser font-bold">
              <h1
                className="uppercase text-5xl"
                style={{
                  letterSpacing: "0px",
                }}
              >
                Certificate
              </h1>
              <h3
                className="uppercase text-2xl"
                style={{
                  letterSpacing: "0.5px",
                }}
              >
                OF ACHIEVEMENT
              </h3>
            </div>
            <div className="mot">
              <div className="styl"></div>
              <p className="text-1xl">This is to cerify that</p>
            </div>
          </div>
          <div className="bottom flex gap-6 flex-col">
            <div className="name cursive-1 text-6xl">
              <span>John Marcus Les</span>
              <div className="line w-10/12 m-auto h-[1.9px] bg-primary-30"></div>
            </div>
            <div className="info flex flex-col gap-4 text-xl">
              <p>Successfully completed the course</p>
              <div className="course-title text-4xl text-primary-30 font-semibold">
                <span>Community Recycling Mangement</span>
              </div>
              <div className="developed flex flex-col">
                <span>Developed by Google Developers Student Community</span>
                <span>
                  Adekunle Ajasin University Akungba Akoko, Ondo State, Nigeria
                </span>
              </div>
              <div className="issued font-semibold">
                <span>Issued 16th February 2024</span>
              </div>
              <div className="logo m-auto w-[70px]">
                <img src="/images/logo1.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
