// import { FaSquareFacebook } from "react-icons/fa6";
import { UseAuth } from "../../firebase/authFuntions";
import { useNavigate } from "react-router-dom";

export default function ExternalAuth() {
  const { googleSignIn } = UseAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        className="flex items-center justify-center  border-none w-full rounded-full p-4 mt-8 text-white font-[roboto] text-base shadow-custom bg-Primary_10 hover:bg-primary-20 "
        onClick={handleGoogleSignIn}
      >
        <p className="">Sign In with Google</p>{" "}
        <img
          src="/images/auth/google.png"
          alt="google"
          className="object-contain ml-3"
        />
      </button>
    </div>
  );
}
