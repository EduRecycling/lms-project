export default function LogIn() {
  return (
    <div>
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Email Address
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Email Address"
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Password
      </p>
      <input
        type="password"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Password"
      />

      <button className="border-none w-full rounded p-4 mt-8 text-white font-[roboto] text-base bg-Primary_70">
        Login
      </button>
    </div>
  );
}
