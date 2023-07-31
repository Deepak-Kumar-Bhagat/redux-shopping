
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import ProductDetails from "./component/ProductDetails";
import Header from "./component/Header";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
