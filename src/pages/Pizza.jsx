import { useEffect, useState } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPizza() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) throw new Error("No se pudo cargar la pizza");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPizza();
  }, []);

  if (loading) return <main className="container my-4">Cargando...</main>;
  if (error) return <main className="container my-4">Error: {error}</main>;
  if (!pizza) return null;

  return (
    <main className="container my-4">
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-7">
          <h1 className="h3">{pizza.name}</h1>
          <p className="text-muted">{pizza.description || pizza.desc}</p>

          <h5>Ingredientes</h5>
          <ul className="mb-3">
            {pizza.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>

          <p className="fw-bold fs-5">Precio: ${pizza.price?.toLocaleString("es-CL")}</p>

          {/* Sin funcionalidad por ahora*/}
          <button className="btn btn-secondary" disabled>
            Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
