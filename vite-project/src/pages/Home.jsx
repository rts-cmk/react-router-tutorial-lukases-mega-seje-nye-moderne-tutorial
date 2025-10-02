import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Forside</h2>
      <br />
      <p style={{ justifyContent: "center", display: "flex" }}>
        Dette er min sygt seje mega gode vildt moderne tutorial på React Routes
      </p>
      <br />
      <Link className="before" to="/about">Næste side: Om React Routes</Link>
    </>
  );
}

export default Home;


