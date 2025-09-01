import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { PIZZAS } from "../data/pizzas";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container my-4">
        {/* Marco amarillo que encierra TODO el bloque de cards */}
        <div className="border border-warning rounded p-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {PIZZAS.map((pz) => (
              <div className="col" key={pz.name}>
                <CardPizza {...pz} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
