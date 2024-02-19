export default function ResetPwd() {
  return (
    <div>
      <p
        className="text-black font-[roboto] text-2xl mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Reset Password
      </p>
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        We will send a 4 digit code to your email address
      </p>
      <p
        className="text-black font-[roboto] text-base mt-8 "
        style={{ letterSpacing: "0.08px" }}
      >
        Email Address
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Email Address"
        required
      />

      <button className="border-none w-full rounded p-4 mt-8 text-white font-[roboto] text-base bg-Primary_70">
        Send OTP
      </button>
    </div>
  );
}
