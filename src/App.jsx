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
        <Route path="/sciclop_website" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Produtos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
