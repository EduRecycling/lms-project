type prop = {
  title: string;
  onclick: any;
  full?: boolean;
  end?: boolean;
  start?: boolean;
  center?: boolean;
  color: string;
};

function Button({ full, end, start, title, onclick, color, center }: prop) {
  return (
    <div
      className={`flex ${
        end
          ? "justify-end"
          : start
          ? "justify-start"
          : center
          ? "justify-center"
          : ""
      }`}
    >
      <button
        className={`p-2 lg:p-4 ${color} ${
          full ? "w-full" : "lg:w-1/2"
        } text-white text-sm rounded-lg sml:text-xl my-4`}
        onClick={onclick}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
