import { FC, useEffect } from "react";
import { useData } from "./context/useData";
import Search from "./components/Search";
import Clock from "./components/Clock";
import Temp from "./components/Temp";
import Center from "./components/Center";
import Details from "./components/Details";
import CopyRight from "./components/CopyRight";
import Loading from "./components/Loading";

const App: FC = () => {
  const { data, city, setCity } = useData();

  const updateCity = (cityName: string) => {
    setCity((prevCity: string) => {
      return (prevCity = cityName);
    });
  };
  useEffect(() => {
    console.log(city);
  }, [city]);
  if (!data) return <Loading />;

  return (
    <div className="App">
      <div className="grid grid-rows-4 gap-4">
        <Search city={city} updateCity={updateCity} />
        <Temp data={data?.main} />
      </div>
      <Center city={city} data={data?.weather[0]} />
      <div className="grid grid-row-5 gap-4">
        <Clock />
        <Details data={data?.main} />
        <CopyRight />
      </div>
    </div>
  );
};

export default App;
