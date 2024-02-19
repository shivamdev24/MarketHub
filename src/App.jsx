import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<ProductDetails />} />

        </Routes>
      </Routers>
    </>
  );
}

export default App;
