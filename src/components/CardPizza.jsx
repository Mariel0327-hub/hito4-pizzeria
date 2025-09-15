import { formatCLP } from "../data/format";

export default function CardPizza({ name, price, ingredients, img, }) {
  return (
    <div className="card h-100 shadow-sm rounded-3">
      {/* Imagen con alto fijo para uniformar alturas */}
      <img
        src={img}
        className="card-img-top"
        alt={`Pizza ${name}`}
        style={{ height: 220, objectFit: "cover" }}
      />

      {/* Cuerpo en columna para empujar precio/botones al final */}
      <div className="card-body d-flex flex-column">
        {/* Título */}
        <h5 className="card-title mb-1">Pizza {name}</h5>

        {/* Separador */}
        <div className="border-top my-2" />

        {/* Ingredientes (un <li> por ingrediente) */}
        <p className="text-muted mb-1 text-center">Ingredientes:</p>
        <ul className="small text-secondary mb-3 text-center list-unstyled">
          {ingredients.map((ing, i) => (
            <li key={i}>
              <span className="me-1" style={{ color: "#f0ad4e" }}>🍕</span>
              {ing}
            </li>
          ))}
        </ul>

        {/* Empuja lo siguiente al fondo de la card */}
        <div className="border-top mt-auto mb-2" />

        {/* Precio centrado, grande, SIN caja */}
        <div className="text-center fw-bold fs-3 mb-2">
          Precio: $ {formatCLP(price)}
        </div>

        {/* Botones separados: izq (Ver Más) y der (Añadir) */}
        <div className="d-flex w-100 justify-content-between align-items-center">
          <button className="btn btn-outline-secondary btn-sm">
            Ver Más <i className="bi bi-eye ms-1" />
          </button>

          <button className="btn btn-dark btn-sm">
            Añadir <i className="bi bi-cart ms-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
