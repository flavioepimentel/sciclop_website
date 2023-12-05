import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Financial from "./pages/Modulos/Financial";
import Fleet from "./pages/Modulos/Fleet";
import Maintenance from "./pages/Modulos/Maintenance";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Financial" element={<Financial />} />
          <Route exact path="Fleet" element={<Fleet />} />
          <Route exact path="Maintenance" element={<Maintenance />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

