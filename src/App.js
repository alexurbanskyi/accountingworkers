import "./App.css";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Pages/Analytics/Analytics";
import Workers from "./Pages/Workers/Workers";
import Layout from "./Pages/Layout/Layout";
import Warehouse from "./Pages/Warehouse/Warehouse";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Desktop from "./Pages/Warehouse/Desktop/Desktop";
import Laptop from "./Pages/Warehouse/Laptop/Laptop";
import Chair from "./Pages/Warehouse/Chair/Chair";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Analytics />} />
        <Route path="workers" element={<Workers />} />
        <Route path="/warehouse" element={<Warehouse />}>
          <Route path="desktop" element={<Desktop />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="chair" element={<Chair />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
