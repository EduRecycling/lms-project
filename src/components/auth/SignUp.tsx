export default function SignUp() {
  return (
    <div>
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        First Name
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your First Name"
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Last Name
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Last Name"
      />
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
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Phone Number
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Phone Number"
      />
      <button className="border-none w-full rounded p-4 mt-8 text-white font-[roboto] text-base bg-Primary_70">
        Create An Account
      </button>
    </div>
  );
}
