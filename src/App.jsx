// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";      
// import Cart from "./pages/Cart";   // 
import "./index.css";

// Login/Register comentados
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}
