import "./App.css";
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'; // Assuming Home is a component, not an icon
import Shop from "./components/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import { LoginProvider } from "./components/context/LoginContext";

function App() {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </>
  );
}

export default App;
