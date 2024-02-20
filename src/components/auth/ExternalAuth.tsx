// import { FaSquareFacebook } from "react-icons/fa6";
import { UseAuth } from "../../firebase/authFuntions";

export default function ExternalAuth() {
  const { googleSignIn } = UseAuth();

  const signInWithGoogle = async () => {
    try {
      console.log("clicked");
      const result = await googleSignIn().then(() =>
        console.log("already called")
      );

      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-center  border-none w-full rounded-full p-4 mt-8 text-white font-[roboto] text-base shadow-custom bg-Primary_10 hover:bg-primary-20 "
        onClick={() => signInWithGoogle()}
      >
        <p className="">Sign In with Google</p>{" "}
        <img
          src="/images/auth/google.png"
          alt="google"
          className="object-contain ml-3"
        />
      </div>
      <button onClick={() => signInWithGoogle()}>click me</button>
      {/* <div className="flex items-center justify-center border-none w-full rounded-full p-4 mt-8  font-[roboto] text-base shadow-custom bg-white">
        <p className="">Sign Up with Facebook</p>
        <FaSquareFacebook className="text-blue-800 ml-3 text-2xl" />
      </div> */}
    </div>
  );
}
