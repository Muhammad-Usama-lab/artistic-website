interface ButtonI {
  label: string;
  theme?: string;
}

const Button = ({ label, theme = "black" }: ButtonI) => {
  return (
    <>
      <button
        className={`flex items-center gap-x-1 uppercase border-2 hover:bg-gray-100 border-${theme} text-${theme} dark:border-gray-300 rounded-full px-4 sm:px-10 py-1 sm:py-3 text-sm font-semibold`}
      >
        {label}

        {theme === "primary" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="#112e9d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path d="M41.9999 24H5.99994" />
              <path d="M30 12L42 24L30 36" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m21 12l-5-5m5 5l-5 5m5-5H3"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default Button;
