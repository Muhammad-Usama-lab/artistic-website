interface ArrowI {
  right?: boolean;
  onClick: () => void;
}

const ArrowButton = ({ onClick, right }: ArrowI) => {
  if (right)
    return (
      <button
        onClick={onClick}
        className="border border-black dark:border-gray-300 rounded-full px-4 py-0 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M41.9999 24H5.99994" />
            <path d="M30 12L42 24L30 36" />
          </g>
        </svg>
      </button>
    );

  return (
    <>
      <button
        // onClick={onClick}
        className="border border-black dark:border-gray-300 rounded-full px-4 py-0 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m3 12l5 5m-5-5l5-5m-5 5h18"
          />
        </svg>
      </button>
    </>
  );
};

export default ArrowButton;
