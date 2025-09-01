import headerImg from "../assets/Header.jpg";

export default function Header() {
  return (
    <div className="container-fluid px-0 mt-0 mb-3">
      <div
        className="p-5  text-center text-white position-relative overflow-hidden"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 220
        }}
      >
        {/* overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,.55)" }} />
        <div className="position-relative">
          <h1 className="display-6 fw-bold">¡Pizzería Mamma Mía!</h1>
          <p className="lead mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>
    </div>
  );
}
