import { FC } from "react";

interface CenterProps {
  data: any;
  city: string;
}
const Center: FC<CenterProps> = ({ data, city }) => {
  return (
    <div className="relative bg-slate-800 rounded-lg p-8 flex justify-center items-center overflow-hidden min-h-fit">
      <div className="Center"></div>
      <div className="z-50 flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl text-white font-bold py-2 px-4 bg-slate-500 inline rounded-md">
          {city.toLocaleUpperCase()}
        </h1>
        <img
          className="weather__logo"
          src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`}
          alt="weather"
          width={100}
          height={100}
        />
        <h1 className="text-white font-semibold">{data?.description}</h1>
      </div>
    </div>
  );
};

export default Center;
