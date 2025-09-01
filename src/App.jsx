import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
