import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 title="Ikke et link din fjollegøj">React</h1>
      <nav>
        <> | </>
        <NavLink className="navlink1" to="/" end>
          Forside
        </NavLink>
        <> | </>
        <NavLink className="navlink1" to="/about">
          Om React Routes
        </NavLink>
        <> | </>
        <NavLink className="navlink1" to="/install-guide">
          Install Guide
        </NavLink>
        <> | </>
        <NavLink className="navlink1" to="/login">
          Login
        </NavLink>
        <> | </>
        <NavLink className="navlink1" to="/dashboard">
          Dashboard
        </NavLink>
        <> | </>
      </nav>
    </div>
  );
}

export default Header;
