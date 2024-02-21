/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FaSquareFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context/ThemeContext";
import { UseAuth } from "../../firebase/authFuntions";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ExternalAuth() {
  const { googleSignIn, setIsAuth } = UseAuth();
  const { routePage } = useContext(ThemeContext) as ThemeContextType;
  const navigate = useNavigate();

   const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const result = await googleSignIn();
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
      navigate(routePage ? routePage : "/dashboard");
    } catch (err) {
      console.error(err);
    }

  // const handleGoogleSignIn = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     navigate(routePage ? routePage : "/dashboard");
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <div className="row flex gap-1 text-xl">
        <input type="checkbox" name="rol" id="rol" />
        <label htmlFor="role">Admin</label>
      </div>
      <button
        className="flex items-center justify-center  border-none w-full rounded-full p-4 mt-2 text-white font-[roboto] text-base shadow-custom bg-Primary_10 hover:bg-primary-20 "
        onClick={handleGoogleSignIn}
      >
        <p className="">Google</p>{" "}
        <img
          src="/images/auth/google.png"
          alt="google"
          className="object-contain ml-3"
        />
      </button>
    </div>
  );
}
