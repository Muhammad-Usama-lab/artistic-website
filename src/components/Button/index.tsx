const Button = ({ label, onClick }) => {
  return (
    <>
      <button
        // onClick={onClick}
        className="flex items-center gap-x-1 uppercase border-2 border-black dark:border-gray-300 rounded-full px-10 py-3 text-sm font-semibold"
      >
        {label}

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
      </button>
    </>
  );
};

export default Button;
