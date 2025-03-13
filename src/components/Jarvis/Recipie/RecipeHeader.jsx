"use-client";
export default function RecipeHeader() {
  return (
    <div className="flex flex-col items-center justify-center mt-11 bg-[#01040d] p-10">
      <h1 className="text-white text-center font-extrabold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        AMX-50345-c-Preskewed
      </h1>
      <div className="relative mt-6 rounded-xl overflow-hidden shadow-lg ring-2 ring-gray-500 sm:mt-8 sm:w-52 md:w-64 lg:w-72">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3ZOIs495C8D7dMKaLMxQtS4VTJ6G0XM4uw&s"
          alt="machine"
        />
      </div>
    </div>
  );
}
