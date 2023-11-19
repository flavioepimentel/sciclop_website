import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sciclop_website" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="products" element={<Produtos />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
