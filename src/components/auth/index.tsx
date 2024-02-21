import { IoMdArrowBack } from "react-icons/io";

import ExternalAuth from "./ExternalAuth";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { Footer } from "../landing";
import { UseAuth } from "../../firebase/authFuntions";
import { Heading } from "../landing/style";
import NotFound from "../../pages/notFound";

export default function Auth() {
  const myFormRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isAuth } = UseAuth();

  if (isAuth) {
    return <NotFound />;
  }

  return (
    <section className="px-[5%] py-[2%] h-full bg-background">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoMdArrowBack className=" text-3xl my-3" />
      </button>

      <div className="flex items-center bg-auth bg-no-repeat   bg-cover bg-center  p-[5%] lg:p-0 lg:[background-image:none] ">
        <div className="lg:basis-1/2 flex-1 w-full lg:overflow-scroll lg:no-scrollbar h-full bg-[rgba(225,225,225,0.9)] lg:bg-white p-[5%]">
          <Heading.h3>Login / Sign Up</Heading.h3>
          <form className="mt-3 ">
            <ExternalAuth />
          </form>
        </div>
        <div
          ref={myFormRef}
          className="lg:basis-1/2 flex-1 h-auto   min-h-[700px] hidden lg:block bg-auth bg-no-repeat bg-contain bg-center "
        ></div>
      </div>
      <div className="mt-[10%]" />
      <Footer />
    </section>
  );
}
