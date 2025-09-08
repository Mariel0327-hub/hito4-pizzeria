import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.email.trim();
    const { password } = form;

    if (!email || !password) {
      return setStatus({ type: "error", msg: "Todos los campos son obligatorios." });
    }
    if (password.length < 6) {
      return setStatus({ type: "error", msg: "La contraseña debe tener al menos 6 caracteres." });
    }

    setStatus({ type: "success", msg: "¡Login exitoso! ✅" });
  };

  return (
    <main className="container my-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        {status.msg && (
          <div
            role="alert"
            className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`}
          >
            {status.msg}
          </div>
        )}

        <button className="btn btn-primary" type="submit">Ingresar</button>
      </form>
    </main>
  );
}
