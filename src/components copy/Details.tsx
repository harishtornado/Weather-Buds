import React from "react";

interface DetailProps {
  data: string;
  description: string;
  src: string;
  unit: string;
}

const DetailsComponent = ({ data, description, src, unit }: DetailProps) => {
  return (
    <div className="flex flex-row gap-8 my-4 items-center">
      <img src={src} alt="" style={{ width: 40, height: 40 }} />
      <p className="text-slate-500">
        {description}
        <span className="block font-bold text-xl text-white">
          {data} {unit}
        </span>
      </p>
    </div>
  );
};

const Details = ({ data }: any) => {
  return (
    <div className="bg-slate-900 rounded-lg row-span-3 flex flex-col justify-center items-center text-white">
      <div>
        <DetailsComponent
          data={data?.temp_max}
          description="Maximum Temperature"
          src={require("../assets/high-temperature.png")}
          unit="°C"
        />
        <DetailsComponent
          data={data?.temp_min}
          description="Minimum Temperature"
          src={require("../assets/low-temperature.png")}
          unit="°C"
        />
        <DetailsComponent
          data={data?.pressure}
          description="Pressure"
          src={require("../assets/pressure.png")}
          unit="hPa"
        />
        <DetailsComponent
          data={data?.humidity}
          description="Humidity"
          src={require("../assets/humidity.png")}
          unit="%"
        />
      </div>
    </div>
  );
};

export default Details;
