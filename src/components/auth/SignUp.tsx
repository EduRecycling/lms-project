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
        id="firstname"
        name="firstname"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your First Name"
        required
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Last Name
      </p>
      <input
        id="lastname"
        name="lastname"
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Last Name"
        required
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Email Address
      </p>
      <input
        type="email"
        id="email"
        name="email"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Email Address"
        required
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Password
      </p>
      <input
        id="password"
        name="password"
        type="password"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Password"
        required
      />
      <p
        className="text-black font-[roboto] text-base mt-2 "
        style={{ letterSpacing: "0.08px" }}
      >
        Phone Number
      </p>
      <input
        type="phone"
        id="phoneno"
        name="phoneno"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder="Enter Your Phone Number"
        required
      />
      <button
        type="submit"
        className="border-none w-full rounded p-4 mt-8 text-white font-[roboto] text-base bg-Primary_70"
      >
        Create An Account
      </button>
    </div>
  );
}
