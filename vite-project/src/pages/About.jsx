import { Routes, Route, Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <>
      <h2>Omkring React Routes</h2>
      <h3>Hvad er React Routes</h3>
      <p>React Routes er en måde at lave "flere" pages på.</p>
      <p>
        Vi bruger React Routes, fordi at React er en
        <span className="fat"> Single Page Application (SPA) </span>.
      </p>
      <br />
      <hr />
      <br />
      <h3>Hvorfor er det smart?</h3>
      <p>
        Det er smart grundet, at vi ikke skal til at genindlæse vores side for
        vær page.
        Som kan spare os reload time.
      </p>
      <br />
      <hr />
      <br />
      <h3>Hvordan virker det</h3>
      <p>Det virker ved at updatere vores URL, som fortæller vores Route, hvad den skal give af output.</p>
      <br />
      <hr />
      <br />
      <Link className="before" to="/install-guide">
        Næste side: Install Guide
      </Link>
    </>
  );
}

export default About;
