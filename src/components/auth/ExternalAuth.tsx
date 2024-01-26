import { FaSquareFacebook } from "react-icons/fa6";

export default function ExternalAuth() {
  return (
    <div>
      <div className="flex items-center justify-center  border-none w-full rounded-full p-4 mt-8 text-white font-[roboto] text-base shadow-custom bg-Primary_10">
        <p className="">Sign Up with Google</p>{" "}
        <img
          src="/images/auth/google.png"
          alt="google"
          className="object-contain ml-3"
        />
      </div>
      <div className="flex items-center justify-center border-none w-full rounded-full p-4 mt-8  font-[roboto] text-base shadow-custom bg-white">
        <p className="">Sign Up with Facebook</p>
        <FaSquareFacebook className="text-blue-800 ml-3 text-2xl" />
      </div>
    </div>
  );
}
