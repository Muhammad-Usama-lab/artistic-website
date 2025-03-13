export default function RecipeListItem({ data }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-4 my-2 w-full">
      <div className="text-blue-400 font-semibold text-sm md:text-base lg:text-lg">
        #{data?.seq_no}
      </div>
      <div className="bg-gray-800 p-3 rounded-lg mt-2">
        <div className=" flex gap-4 text-gray-400 text-xs md:text-sm lg:text-base">
          <div className="flex-1">
            <span className="block text-white font-medium text-xs md:text-sm lg:text-base">
              Process
            </span>
            <p className="text-xs md:text-sm ">{data?.process_title ?? "-"}</p>
          </div>
          <div className="flex-1">
            <span className="block text-white font-medium text-xs md:text-sm lg:text-base">
              Level
            </span>
            <p className="text-xs md:text-sm ">{data?.level_code ?? "-"}</p>
          </div>
          <div className="flex-1">
            <span className="block text-white font-medium text-xs md:text-sm lg:text-base ">
              Temp
            </span>
            <p className="text-xs md:text-sm  ">{data?.temp ?? "-"}</p>
          </div>
          <div className="flex-1">
            <span className="block text-white font-medium text-xs md:text-sm lg:text-base">
              Time
            </span>
            <p className="text-xs md:text-sm ">{data?.time_code ?? "-"}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg mt-2 text-gray-400 text-xs md:text-sm lg:text-base">
        <span className="block text-white font-medium text-xs md:text-sm lg:text-base">
          Instructions
        </span>
        <p className="text-xs md:text-sm ">{data?.instructions ?? "-"}</p>
      </div>
    </div>
  );
}
