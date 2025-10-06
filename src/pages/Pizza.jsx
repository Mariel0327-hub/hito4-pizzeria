import { useEffect, useState } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        // Si tu API expone /api/pizzas/p001 (objeto)
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) throw new Error("No se pudo cargar la pizza");
        const data = await res.json();
        setPizza(data);

        // --- Si tu API entrega un ARRAY en /api/pizzas, usa esta alternativa: ---
        // const res = await fetch("http://localhost:5000/api/pizzas");
        // if (!res.ok) throw new Error("No se pudo cargar la pizza");
        // const list = await res.json();
        // const data = list.find((p) => p.id === "p001");
        // setPizza(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <main className="container my-4">Cargando…</main>;
  if (error) return <main className="container my-4">Error: {error}</main>;
  if (!pizza) return <main className="container my-4">Sin datos de pizza</main>;

  const name = pizza.name ?? pizza.nombre ?? "Pizza";
  const desc = pizza.description ?? pizza.desc ?? "";
  const price = Number(pizza.price ?? pizza.precio ?? 0);
  const ingredients = pizza.ingredients ?? pizza.ingredientes ?? [];

  return (
    <main className="container my-4">
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <img src={pizza.img} alt={name} className="img-fluid rounded" />
        </div>

        <div className="col-12 col-md-7">
          <h1>{name}</h1>
          <p className="text-muted">{desc}</p>

          <h5>Ingredientes</h5>
          <ul className="mb-3">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <p className="fw-bold fs-5">
            Precio: ${price.toLocaleString("es-CL")}
          </p>
        </div>
      </div>
    </main>
  );
}
