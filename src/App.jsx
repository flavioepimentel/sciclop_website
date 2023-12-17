import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Financial from "./pages/Modulos/Financial";
import Fleet from "./pages/Modulos/Fleet";
import Maintenance from "./pages/Modulos/Maintenance";
import About from "./pages/About/About";

import './index.css';


export default function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact element={<Layout />}>
          {["Home", "/"].map((path) => (
          <Route path={path} index element={<Home />} />
          ))}
          <Route exact path="about" element={<About />} />
          <Route exact path="financial" element={<Financial />} />
          <Route exact path="fleet" element={<Fleet />} />
          <Route exact path="maintenance" element={<Maintenance />} />
          <Route exact path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

