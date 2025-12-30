import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Workflow } from "./Pages/Workflow";
import "./App.css"
import Products from "./Pages/Products";

function App() {
  return (
     <BrowserRouter>
    <Routes>
     <Route path="/" element={<Workflow/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
