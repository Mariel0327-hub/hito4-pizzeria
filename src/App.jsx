import Navbar from "./components/Navbar";
// import Home from "./pages/Home";//
import Footer from "./components/Footer";
import "./index.css";

import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage"; //

export default function App() {
  return (
    <div className="page">
      <Navbar />
      {/* <Home /> */}   {/* <- deja Home comentado */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}