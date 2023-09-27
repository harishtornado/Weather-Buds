import {
  useContext,
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

const DataContext = createContext<any | undefined>(undefined);

const fetchData = async (city: string) => {
  const fetchUrl = `https://weather-api-v5aw.onrender.com/weather/${city}`;
  try {
    const res = await fetch(fetchUrl);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [city, setCity] = useState<string>("chennai");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData(city)
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [city]);

  return (
    <DataContext.Provider value={{ data, city, setCity }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => {
  return useContext(DataContext);
};
