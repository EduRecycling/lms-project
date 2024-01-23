import { BtnIcon } from "./style";

const Goto = () => {
  return (
    <div className="nid absolute w-full z-50 p-2 translate-[(0, -50%)] top-[50%]">
      <BtnIcon className="goto font-mono bg-primary-60 text-black float-left">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </BtnIcon>
      <BtnIcon className="goto font-mono bg-primary-60 text-black float-right">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </BtnIcon>
    </div>
  );
};

export default Goto;
