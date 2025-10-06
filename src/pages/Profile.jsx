export default function Profile() {
  const email = "usuario@ejemplo.com";
  return (
    <section>
      <h1>Perfil</h1>
      <p>Email: {email}</p>
      <button onClick={() => alert("Cerrar sesión (Hito 5)")}>Cerrar sesión</button>
    </section>
  );
}
