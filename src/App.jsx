import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Financial from "./pages/Modulos/Financial";
import Fleet from "./pages/Modulos/Fleet";
import Maintenance from "./pages/Modulos/Maintenance";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sciclop_website" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="financial" element={<Financial />} />
          <Route exact path="fleet" element={<Fleet />} />
          <Route exact path="maintenance" element={<Maintenance />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
