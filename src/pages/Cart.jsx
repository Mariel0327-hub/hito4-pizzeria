import { useMemo, useState } from "react";
import { pizzaCart } from "../assets/pizzas"; // o "../data/pizzas" según tu proyecto

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const inc = (id) => {
    setCart(prev =>
      prev.map(p => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const dec = (id) => {
    setCart(prev =>
      prev
        .map(p => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter(p => p.count > 0)
    );
  };

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.count, 0),
    [cart]
  );

  if (cart.length === 0) {
    return <div className="state">Tu carro está vacío</div>;
  }

  return (
    <section className="cart">
      <h2>Carro de compras</h2>

      <ul className="cart_list">
        {cart.map((p) => (
          <li key={p.id} className="cart_item">
            <img src={p.img} alt={p.name} width={64} />
            <div className="cart_meta">
              <h4>{p.name}</h4>
              <span>${p.price.toLocaleString("es-CL")} c/u</span>
            </div>

            <div className="qty">
              <button onClick={() => dec(p.id)} aria-label="Disminuir">-</button>
              <span>{p.count}</span>
              <button onClick={() => inc(p.id)} aria-label="Aumentar">+</button>
            </div>

            <div className="cart_subtotal">
              ${(p.price * p.count).toLocaleString("es-CL")}
            </div>
          </li>
        ))}
      </ul>

      <hr />
      <div className="cart_total">
        <strong>Total:</strong> ${total.toLocaleString("es-CL")}
      </div>
    </section>
  );
}
