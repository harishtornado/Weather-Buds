import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import DataProvider from "./context/useData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DataProvider>
    <App />
  </DataProvider>
);
