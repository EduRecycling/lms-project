import { useNavigate } from "react-router";
import { Footer, Navbar } from "../../components/landing";
import { Heading } from "../../components/landing/style";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="nit h-svh bg-secondary-90 flex flex-col justify-between">
      <Navbar />
      <div className="notFound w-full flex justify-center items-center h-full">
        <div className="inner flex flex-row-reverse items-center">
          <div className="img-box w-80">
            <img src="/images/banner-img.png" alt="" />
          </div>
          <div className="error-message flex flex-col gap-1">
            <Heading.h1 className="font-bold m-0">Page Not Found</Heading.h1>
            <Heading.h4>Seems you are lost</Heading.h4>
            <div className="flex gap-1 flex-wrap flex-col">
              <div className="flex gap-2 pt-2">
                <button
                  className="back p-2 px-5 text-xl bg-primary-20 text-primary-100 font-semibold rounded"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Back
                </button>
                <button
                  className="back p-2 px-5 text-xl bg-primary-20 text-primary-100 font-semibold rounded"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
