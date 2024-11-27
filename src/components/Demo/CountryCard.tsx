import { Feature } from "@/types/feature";

interface CountryI {
  feature: Feature;
  selected: undefined | string;
  setSelected: (title: string) => void;
}

const Country = ({ feature, selected, setSelected }: CountryI) => {
  const { icon, title, paragraph } = feature;
  return (
    <div
      onClick={() => setSelected(title)}
      className={`w-full cursor-pointer border-solid border hover:bg-gray-100 ${selected === title ? "border-green-500 border-2" : "border-gray-200"} rounded-md p-5`}
    >
      <div
        className="wow fadeInUp"
        data-wow-delay="0.9s flex items-center justify-center"
      >
        <div className="mb-10 h-[70px] w-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base text-center font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Country;
