import { IoMdArrowBack } from "react-icons/io";

import ExternalAuth from "./ExternalAuth";
import SignUp from "./SignUp";
import { useEffect, useRef, useState } from "react";
import LogIn from "./LogIn";
import ResetPwd from "./ResetPwd";
import { useNavigate } from "react-router";
import { Footer } from "../../components/landing";

type control = {
  login: boolean;
  SignUp: boolean;
  recover: boolean;
};

export default function Auth() {
  const [controlAuth, setControlAuth] = useState<control>({
    login: true,
    SignUp: false,
    recover: false,
  });
  const [height, setHeight] = useState<number>(0);

  const myFormRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (myFormRef.current) {
      // Access the offsetHeight property to get the height
      setHeight(myFormRef.current.offsetHeight);
      // console.log("Element height:", height);
    }
  }, [controlAuth]);
  const handleAuthControl = (actionType: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setControlAuth((prevControlAuth: control | any) => {
      if (actionType === "login") {
        return { login: true, SignUp: false, recover: false };
      } else if (actionType === "signup") {
        return { login: false, SignUp: true, recover: false };
      } else if (actionType === "recover") {
        return { login: false, SignUp: false, recover: true };
      }
      // Default: If none of the above action types match, return the previous state
      return prevControlAuth;
    });
  };

  const navigate = useNavigate();

  return (
    <section className="px-[5%] py-[2%] h-full bg-background">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoMdArrowBack className=" text-3xl my-3" />
      </button>
      <img
        src="/images/logo1.png"
        alt={"logo"}
        width={100}
        height={100}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex items-center bg-auth bg-no-repeat   bg-cover bg-center  p-[5%] lg:p-0 lg:[background-image:none] ">
        <div
          ref={myFormRef}
          className="lg:basis-1/2 flex-1 w-full h-full bg-[rgba(225,225,225,0.9)] lg:bg-white p-[5%]"
        >
          {!controlAuth.recover && (
            <div className=" flex justify-evenly mb-6">
              <p
                className={`text-black font-[roboto] lg:text-3xl text-xl p-3 cursor-pointer ${
                  controlAuth.SignUp && "border-b-4 border-Primary_70"
                }`}
                onClick={() => handleAuthControl("signup")}
              >
                Sign Up
              </p>
              <p
                className={`text-black font-[roboto] lg:text-3xl text-xl p-3 cursor-pointer ${
                  controlAuth.login && "border-b-4 border-Primary_70"
                }`}
                onClick={() => handleAuthControl("login")}
              >
                Log In
              </p>
            </div>
          )}
          <form className="mt-3 ">
            {controlAuth.SignUp && <SignUp />}
            {controlAuth.recover && <ResetPwd />}
            {controlAuth.login && (
              <>
                <LogIn />
                <p
                  className="p-3 text-right text-base font-medium cursor-pointer"
                  onClick={() => handleAuthControl("recover")}
                >
                  Recover Password
                </p>
              </>
            )}

            {!controlAuth.recover && <ExternalAuth />}
          </form>
        </div>
        <div
          style={{ height }}
          className="lg:basis-1/2 flex-1   min-h-[700px] hidden lg:block bg-auth bg-no-repeat bg-contain bg-center "
        ></div>
      </div>
      <div className="mt-[10%]" />
      <Footer />
    </section>
  );
}
