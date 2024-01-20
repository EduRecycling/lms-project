import { Colors } from "../../../colors";
export default function Footer() {
  return (
    <div
      className={`p-[5%] w-full`}
      style={{ backgroundColor: Colors.Primary_30 }}
    >
      <p className="text-center text-white text-4xl font-[roboto]">
        © 2024 Edurecyclying
      </p>
    </div>
  );
}
