const Temp = ({ data }: any) => {
  return (
    <div className="rounded-lg row-span-3 flex justify-center items-center flex-col border-4 border-slate-400 px-8">
      <h1 className="text-white text-6xl max-sm:text-4xl mb-4">
        {data?.temp} °C
      </h1>
      <div className="flex flex-row text-slate-400 gap-4">
        <p>Feels Like: {data?.feels_like}</p>
      </div>
    </div>
  );
};

export default Temp;
