import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas"); 
        if (!res.ok) throw new Error("No se pudo cargar el listado de pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <main className="container my-4">Cargando…</main>;
  if (error)   return <main className="container my-4">Error: {error}</main>;

  return (
    <div>
      <Header />
      <main className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pz) => (
            <div className="col" key={pz.id}>
              {}
              <CardPizza {...pz} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

