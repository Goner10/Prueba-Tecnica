import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'


import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/products" element={<Products />} />
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
