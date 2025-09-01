import { formatCLP } from "../data/format";

export default function Navbar() {
  const token = false;
  const total = 25000;

  return (
    // quita margen inferior (mb-0) y deja fondo full width
    <nav className="navbar navbar-dark bg-dark sticky-top mb-0">
      {/* container-fluid para que el fondo cubra 100% del ancho */}
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
        <div className="d-flex align-items-center gap-2">
          <span className="navbar-brand mb-0 h6 me-2">Pizzería Mamma Mía!</span>
          <button className="btn btn-outline-light btn-sm">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
            </>
          )}
        </div>

        <button className="btn btn-success btn-sm">🛒 Total: $ {formatCLP(total)}</button>
      </div>
    </nav>
  );
}
