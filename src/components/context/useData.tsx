import {
  useContext,
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

const DataContext = createContext<any | undefined>(undefined);

const fetchData = async (city: string) => {
  try {
    const res = await fetch(`http://localhost:5050/${city}`);
    const data = await res.json();
    return data;
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
        console.log(fetchedData);
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
