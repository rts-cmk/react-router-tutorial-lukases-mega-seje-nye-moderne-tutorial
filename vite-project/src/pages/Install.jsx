import CodeBlock from "./codeblock";

function Install() {
  return (
    <>
      <h2>Install Guide</h2>
      <p>
        Guide krav:
        <a
          style={{ color: "rgba(73, 79, 237, 1)" }}
          title="Vite download link"
          href="https://vite.dev/"
        >
          Vite
        </a>
        og
        <a
          style={{ color: "#2f9d54ff" }}
          title="Node Download link"
          href="https://nodejs.org/en"
        >
          Node
        </a>
      </p>
      <h3>Trin 1:</h3>
      <p>
        Når vi har lavet vores projekt kan vi starte med, at import de ting vi
        har brug for.
      </p>
      <br />
      <p>bash (Terminal)</p>
      <CodeBlock code={`npm install react-router`} />
      <br />
      <p>main.jsx</p>
      <CodeBlock
        code={`import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app";
        
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
    );`}
      />
      <p>Her har vi en meget standart opsætning af main.jsx </p>
      <br />
      <h3>Trin 2:</h3>
      <p>Nu skal vi til at lave vores links.</p>
      <br />
      <p>app.jsx</p>
      <CodeBlock
        code={`import { Routes, Route, Link, useNavigate } from "react-router-dom"; /* Link import */

function Home() { /* Home output */
  return <h2>Forside</h2>
}
function About() { /* About output */
  return <h2>About</h2>
}

function App() {
  return (
    <div>
      <Link to="/" end>Forside</Link> /* linket til Home */
      <Link to="/about" end>About</Link> /* Linket til About */

      <Routes>
        <Route path="/" element={<Home />} /> /* Home page */
        <Route path="/About" element={<About />} /> /* About page */
      </Routes>
    </div>
  );
}

export default App; /* laver App til en output, som vi kan bruge i main.jsx */`}
      />
<p>her har vi en simpel app.jsx, hvor vi laver 2 funtion, 2 link og 2 routes.</p>
<br />
<h3>Trin 3:</h3>
<p>Når vi er færdige med trin 2. har vi faktisk alt vi skal bruge. Det skal dog siges at på <a style={{color: "red"}} href="https://reactrouter.com/home">React Routes</a> kan man finde meget mere.</p>
<br />
    </>
  );
}

export default Install;
