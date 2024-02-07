type prop = {
  value: string;
  name?: string;
  title: string;
  onchange: any;
  placeholder: string;
};

export default function Input({
  value,
  onchange,
  placeholder,
  title,
  name,
}: prop) {
  return (
    <div className="flex-col items-center">
      <p
        className="text-black font-[roboto] text-base mt-2 font-semibold mr-3"
        style={{ letterSpacing: "0.08px" }}
      >
        {title}
      </p>
      <input
        type="text"
        className="py-3 px-2 border border-solid w-full my-2 border-Primary_90"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}
